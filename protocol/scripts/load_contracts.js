require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_GOERLI
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)



// reusing "NFTFinder" at 0xf0d05C2684a1095C9EFedd4e0cE252413588Ba7a
// reusing "NFTPool" at 0x130905BdBEA06a09D381EAAB2A8ab319F82D7a05
// reusing "NFTLoanVault" at 0x91dc1473115400B46f1CDEE27f0252d6a6B0E1DE

const nftFinderABI = require("./nft_gateway/data/abi/NFTFinder.json")
const nftFinderAddress = "0xf0d05C2684a1095C9EFedd4e0cE252413588Ba7a"
const nftFinderContract = new web3.eth.Contract(nftFinderABI, nftFinderAddress)

const nftLoansABI = require("./nft_gateway/data/abi/NFTLoanVault.json")
const nftLoansAddress = "0x0B29836C0d83cF0c96940bBf2BAE2E13e3636ea8"
const nftLoansContract = new web3.eth.Contract(nftLoansABI, nftLoansAddress)


const nftPoolABI = require("./nft_gateway/data/abi/NFTPool.json")
const nftPoolAddress = "0x130905BdBEA06a09D381EAAB2A8ab319F82D7a05"
const nftPoolContract = new web3.eth.Contract(nftPoolABI, nftPoolAddress)


const lender = "0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6";
const borrower2 = '0x89E3428b4d48130e7f19a5217e78cb16f8D4180A';
const borrower1 = '0xC6f5fA770492d1FB49220b94518f47841bB6Db9e';



/**
 * 0. List NFT
 */
async function listRandomsNFT() {


    // uint256 listedOn,
    // address tknAddress,
    // uint256 tknId,
    // string memory complianceCheck,
    // uint256 dailyFee,
    // ReturnCondition returnCondition,
    // uint256 expiry,
    // NFTCollateral memory collateral

    // RANDOM Listings section

    // let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    // let tx = {
    //     from: PUBLIC_KEY,
    //     to: nftPoolAddress,
    //     nonce: nonce,
    //     gas: 500000,
    //     data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 5912, 'pass', 3, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    // }

    // await signAndSend(tx);

    // let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //2
    // let tx = {
    //     from: PUBLIC_KEY,
    //     to: nftPoolAddress,
    //     nonce: nonce,
    //     gas: 500000,
    //     data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 7149, 'pass', 35, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    // }

    // await signAndSend(tx);

    // let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //3
    // let tx = {
    //     from: PUBLIC_KEY,
    //     to: nftPoolAddress,
    //     nonce: nonce,
    //     gas: 500000,
    //     data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 9220, 'pass', 4, 0, 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    // }

    // await signAndSend(tx);
    // let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //4
    // let tx = {
    //     from: PUBLIC_KEY,
    //     to: nftPoolAddress,
    //     nonce: nonce,
    //     gas: 500000,
    //     data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 2568, 'pass', 45, 0, 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    // }

    // await signAndSend(tx);

    // nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //5
    // tx = {
    //     from: PUBLIC_KEY,
    //     to: nftPoolAddress,
    //     nonce: nonce,
    //     gas: 500000,
    //     data: nftPoolContract.methods.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 2830, 'pass', 5, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }).encodeABI(),
    // }

    // await signAndSend(tx);

}


async function listAlice8670() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftPoolAddress,
        nonce: nonce,
        gas: 500000,
        data: nftPoolContract.methods.listNFT(1646166783, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 8670, 'pass', 5, 1, 1660595583, { amount: 12000000000, currency: 'ETH' }).encodeABI(),
    }
    await signAndSend(tx);
}


async function listAlice1167() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftPoolAddress,
        nonce: nonce,
        gas: 500000,
        data: nftPoolContract.methods.listNFT(1642192383, '0x7f36182dee28c45de6072a34d29855bae76dbe2f', 1167, 'pass', 1, 1, 1649968383, { amount: 2250000000, currency: 'ETH' }).encodeABI(),
    }
    await signAndSend(tx);
}

async function listAlice5531() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftPoolAddress,
        nonce: nonce,
        gas: 500000,
        data: nftPoolContract.methods.listNFT(1643747583, '0xbd4455da5929d5639ee098abfaa3241e9ae111af', 5531, 'pass', 5, 1, 1646166783, { amount: 5000000000, currency: 'ETH' }).encodeABI(),
    }
    await signAndSend(tx);
}

async function loan8670() {

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftLoansAddress,
        nonce: nonce,
        gas: 500000,
        data: nftLoansContract.methods.borrowedOn('0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6', { listedOn: 1646166783, tknAddress: '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', tknId: 8670, compliance: 'pass', dailyFee: 5, returnCondition: 1, expiry: 1660595583, collateral: { amount: 12000000000, currency: 'ETH' } }, 20, 1648413183,).encodeABI(),
    }
    await signAndSend(tx);
}
async function loan1167() {

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftLoansAddress,
        nonce: nonce,
        gas: 500000,
        data: nftLoansContract.methods.borrowedOn('0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6', { listedOn: 1642192383, tknAddress: '0x7f36182dee28c45de6072a34d29855bae76dbe2f', tknId: 1167, compliance: 'pass', dailyFee: 1, returnCondition: 1, expiry: 1649968383, collateral: { amount: 2250000000, currency: 'ETH' } }, 30, 1644870783, 1500000000, 850000000, 650000000, 66, '0x7f36182dee28c45de6072a34d29855bae76dbe2f', 1).encodeABI(),
    }
    await signAndSend(tx);
}


async function loan5531() {

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //1
    const tx = {
        from: PUBLIC_KEY,
        to: nftLoansAddress,
        nonce: nonce,
        gas: 500000,
        data: nftLoansContract.methods.borrowedOn('0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6', { listedOn: 1643747583, tknAddress: '0xbd4455da5929d5639ee098abfaa3241e9ae111af', tknId: 5531, compliance: 'pass', dailyFee: 5, returnCondition: 1, expiry: 1646166783, collateral: { amount: 5000000000, currency: 'ETH' } }, 10, 1644611583, 4000000000, 2500000000, -15000000000, 0, '0x00', 3).encodeABI(),
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
    // await listRandomsNFT();
    // await listAlice8670();
    // await listAlice1167();
    // await listAlice5531();
    await loan8670();

}

main();



