// Just a quick prototyping module ... loose colection of actions and APIs ... TODO - Normalize

const ethers = require('ethers');
const https = require('https');
require('dotenv').config({ path: '../.env' })

//JSON RPC
const providerURL = process.env.ALCHEMY_GOERLI
const provider = new ethers.providers.JsonRpcProvider(providerURL);


// NFTPort API provider config
const options = {
    hostname: process.env.NFT_PORT_URL,
    port: 443,
    path: process.env.NFT_PORT_MATCH,
    method: 'GET',
    accept: 'application/json',
    query: { chain: 'ethereum' },
    headers: {
        Authorization: process.env.NFT_PORT_KEY
    },
};

// Add these to your .env and delete from here
// NFT_PORT_KEY = "6e1a58fb-550c-4dd4-92db-1508572bc92b"
// NFT_PORT_URL = "api.nftport.xyz"
// NFT_PORT_MATCH = "/v0/search?"

/**
 * Retrieve the token URI
 * @param {*} input 
 * @param {*} callback 
 */
const handleURIRequest = async (input, callback) => {

    const token_uri = await getTokenURI(input.contract_address, input.token_id)
    let responseBody = {
        message: "Retrieved",
        token_uri: token_uri
    };

    let response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };
    callback(200, response);

}
/**
 * Retrieve via API search
 * @param {*} input 
 * @param {*} callback 
 */
const handleNFTSearch = async (input, callback) => {

    options.path = options.path + 'chain=ethereum&text=' + input.text + '&' + input.chain + '&filter_by_contract_address=' + input.contract_address;
    console.log(options.path);
    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        let data;
        res.on('data', d => {
            data = data + d

        });
        res.on('end', function () {
            callback(200, data);
        });
    });

    req.on('error', error => {
        console.log('ERROR', error);
    });

    req.end();

}

const getTokenURI = async function (nft_contract_address, token_id) {

    const nftContract = new ethers.Contract(nft_contract_address, abiErc721, provider);
    const token_uri = await nftContract.tokenURI(token_id)
    return { token_uri: token_uri }
}

const abiErc721 = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function tokenURI(uint256 tokenId) external view returns (string memory)"
];
/**
 * Lambda function wrapper for the service
 */
exports.handler = (event, context, callback) => {


    handleNFTSearch(event, (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,

            isBase64Encoded: false
        })
    })
}
module.exports.handleURIRequest = handleURIRequest
module.exports.handleNFTSearch = handleNFTSearch