const ethers = require('ethers');
const https = require('https');
const redis = require('redis');
require('dotenv').config({ path: '../.env' });
const nftSubscriber = require('../nft-subscriber');
const nftCompliance = require('../nft-compliance');
const nftMetaMatch = require('../nft-ipfs');

// Blockchain provider config
const ALCHEMY_API_URL = process.env.ALCHEMY_GOERLI
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

//Web3
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)


// Our Contracts
const NFTFinderABI = require("./data/abi/NFTFinder.json")

// update .env and delete from here
// NFTFINDER_CONTRACT_GOERLI = "0x3E0227eF090364Eb0823e25eF99832c4174448af"
// NFTFINDER_CHAIN_ID_GOERLI = "5"

const NFTFinderContractAddress = process.env.NFTFINDER_CONTRACT_GOERLI
const NFTFINDER_CHAIN_ID = process.env.NFTFINDER_CHAIN_ID_GOERLI

// REDIS Pub/Sub
const publisher = redis.createClient({ url: 'redis://127.0.0.1:6379' });

/**
 * 
 * System events and topics
 *
 */
// PUBLISH when and new NFT contract is registered on the platform, subscribe to execute matching logic. Will publish an event every time a blockchain event is published (i.e. mint, transfer)
const NFTRegistered = "NFTRegistered";
// PUBLISH when new martch is created, subscribe to update contract on chain. 
const NFTMatched = "NFTMatched";


/**
 * Gateway is a publisher of NFTRegistered and subscriber to NFTMatched
 */
async function start() {
    await publisher.connect();
    const client = redis.createClient();

    const subscriber = client.duplicate();

    await subscriber.connect();

    await subscriber.subscribe(NFTMatched, (message) => {
        nftMatch(message)
    });
}
start();






/**
 * Accept and persist the NFT to be registered for matching.
 * @param {*} input 
 * @param {*} callback 
 */
const handleNFTRegistration = async (input, callback) => {

    // find some good persistence provider tha will not lock us in on any given platform
    // define persistence model that lends itself well towards eventual distributed deployment
    // persist the NFT in our domain ...

    console.log("Registering on chainID " + NFTFINDER_CHAIN_ID + " address: " + input.contract_address);

    // call blockchain subscriber module, hook to any events coming in for the contract registered
    nftSubscriber.subscriber.subscribe("/v1/" + NFTFINDER_CHAIN_ID + "/events/address/" + input.contract_address + "/", function (message) {
        console.log('Received Event: ', message.body);
        publisher.publish(NFTRegistered, message.body);
    })


    // Do some complaince checks on the registered NFT
    complianceCheck = nftCompliance.checkAuthenticity(
        {
            "chain": process.env.COMPLIANCE_CHECK_CHAIN,
            "contract_address": input.contract_address,
            "token_id": input.tkn_id,
            "page_number": 1,
            "page_size": 50,
            "threshold": 0.9
        }
    );



    // And lastly update Finder contract on chain
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest")

    const NFTFinderContract = new web3.eth.Contract(NFTFinderABI, NFTFinderContractAddress)
    const tx = {
        from: PUBLIC_KEY,
        to: NFTFinderContractAddress,
        nonce: nonce,
        gas: 500000,
        data: NFTFinderContract.methods.register({ tknAddress: input.contract_address, tknId: input.tkn_id, amount: input.amount, listingLength: input.length, compliance: complianceCheck.status }).encodeABI(),
    }

    await signAndSend(tx);
    callback(200, { tx: tx });
}

/**
 * We found some! Let's update the Finder contract on chain. This is just a gateway helper for testing from Postman ...
 * @param {*} input 
 * @param {*} callback 
 */
const handleNFTMatch = async (input, callback) => {

    const tx = await nftMatch({
        source: {
            contract_id: input.source_contract,
            token_id: input.source_tknId
        },
        match: {
            contract_id: input.match_contract,
            token_id: input.match_tknId
        }
    });
    callback(200, { tx: tx });
}

const nftMatch = async (event) => {
    // pretend we found a matching NFT like this
    const matchingCollection = event.match.contract_id;
    const matchingID = event.match.token_id;
    let matchingTrait = nftMetaMatch.hasMatchingTrait(event.tokenURI, event.trait_type, event.trait_value);
    if (matchingTrait) {

        //for a listing like this (retrieve it from domain)
        const listingToMatch = { tknAddress: event.source.contract_id, tknId: event.source.token_id, amount: 10, listingLength: 50 }

        // all that is left id to update the on-chain finder contract, making the match available to transact with in smart contracts
        const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest")


        const NFTFinderContract = new web3.eth.Contract(NFTFinderABI, NFTFinderContractAddress)
        const tx = {
            from: PUBLIC_KEY,
            to: NFTFinderContractAddress,
            nonce: nonce,
            gas: 500000,
            data: NFTFinderContract.methods.updateMatch(listingToMatch, matchingCollection, matchingID).encodeABI(),
        }

        await signAndSend(tx);
        return tx;

    }




}



async function signAndSend(tx) {

    const signed = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log(receipt);
}

/**
 * Lambda function wrapper for the service
 */
exports.handler = (event, context, callback) => {


    handleNFTRegistration(event, (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,

            isBase64Encoded: false
        })
    })
}

module.exports.handleNFTRegistration = handleNFTRegistration
module.exports.handleNFTMatch = handleNFTMatch