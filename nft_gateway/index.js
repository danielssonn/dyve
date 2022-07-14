const ethers = require('ethers');
const https = require('https');
require('dotenv').config({ path: '../.env' })


// Blockchain provider config
const ALCHEMY_API_URL = process.env.ALCHEMY_GOERLI
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

//Web3
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)


// Our Contracts
const NFTFinderABI = require("./data/abi/NFTFinder.json")
const NFTFinderContractAddress = process.env.NFTFINDER_CONTRACT_GOERLI




/**
 * Accept and persist the NFT to be registered for matching.
 * @param {*} input 
 * @param {*} callback 
 */
const handleNFTRegistration = async (input, callback) => {

    // find some good persistence provider tha will not lock us in on any given platform
    // define persistence model that lends itself well towards eventual distributed deployment
    // persist the NFT in our domain ...


    // And lastly update Finder contract on chain
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest")

    const NFTFinderContract = new web3.eth.Contract(NFTFinderABI, NFTFinderContractAddress)
    const tx = {
        from: PUBLIC_KEY,
        to: NFTFinderContractAddress,
        nonce: nonce,
        gas: 500000,
        data: NFTFinderContract.methods.register({ tknAddress: '0x39DC1f0B54913FF057AEccE87240FB28c1772C1c', tknId: 15, amount: 10, listingLength: 50 }).encodeABI(),
    }

    await signAndSend(tx);
    callback(200, { tx: tx });
}

/**
 * We found some! Let's update the Finder contract on chain.
 * @param {*} input 
 * @param {*} callback 
 */
const handleNFTMatch = async (input, callback) => {

    // pretend we found a matching NFT like this
    const matchingCollection = '0x39DC1f0B54913FF057AEccE87240FB28c1772C1c';
    const matchingID = 16;

    //for a listing like this (retrieve it from domain)
    const listingToMatch = { tknAddress: '0x39DC1f0B54913FF057AEccE87240FB28c1772C1c', tknId: 15, amount: 10, listingLength: 50 }

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
    callback(200, { tx: tx });
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