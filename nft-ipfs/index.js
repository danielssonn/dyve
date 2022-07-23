const ipfsAPI = require('ipfs-api');
const fs = require('fs');

const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' })


let hasMatchingTrait = function (CID, trait_type, trait_value) {

    // Pull the JSON metadata from IPFS, and let's assess it
    ipfs.files.get(CID, function (err, files) {
        files.forEach((file) => {
            // do some fancy matching to see if the same or similar trait_type and trait_value is present in CID
            return true;
        })
    })
    return true;
}
exports.hasMatchingTrait = hasMatchingTrait;

