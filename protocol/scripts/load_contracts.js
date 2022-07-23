require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_GOERLI
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)



// reusing "NFTFinder" at 0x94280658C62ec054097Be2837e224106612C601D
// reusing "NFTLoans" at 0x51047baaF2a9BcD89DA5CB7aD56BB4468B0d4d02
// reusing "NFTPool" at 0x51047baaF2a9BcD89DA5CB7aD56BB4468B0d4d02

const nftFinderABI = require("../../nft_gateway/data/abi/NFTFinder.json")
const nftFinderAddress = "0x94280658C62ec054097Be2837e224106612C601D"
const nftFinderContract = new web3.eth.Contract(nftFinderABI, nftFinderAddress)

const nftLoansABI = require("../../nft_gateway/data/abi/NFTLoans.json")
const nftLoansAddress = "0x51047baaF2a9BcD89DA5CB7aD56BB4468B0d4d02"
const nftLoansContract = new web3.eth.Contract(nftLoansABI, nftLoansAddress)


const nftPoolABI = require("../../nft_gateway/data/abi/NFTPool.json")
const nftPoolAddress = "0x51047baaF2a9BcD89DA5CB7aD56BB4468B0d4d02"
const nftPoolContract = new web3.eth.Contract(nftPoolABI, nftPoolAddress)


const lender = "0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6";
const borrower2 = '0x89E3428b4d48130e7f19a5217e78cb16f8D4180A';
const borrower1 = '0xC6f5fA770492d1FB49220b94518f47841bB6Db9e';



/**
 * 0. List NFT
 */
async function listNFT() {


    // uint256 listedOn,
    // address tknAddress,
    // uint256 tknId,
    // string memory complianceCheck,
    // uint256 dailyFee,
    // ReturnCondition returnCondition,
    // uint256 expiry,
    // NFTCollateral memory collateral

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: nftPoolAddress,
        nonce: nonce,
        gas: 500000,
        data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 5912, 'none', 5, 'ANY', 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    }

    await signAndSend(tx);
}




async function signAndSend(tx) {

    const signed = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log(receipt);
}

async function main() {

    // await mintTokens();
    await listNFT();
    // await approve();
    // await stakeTokens();  
    // await getStakes();

}

main();



