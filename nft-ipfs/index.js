const ipfsAPI = require('ipfs-api');
const fs = require('fs');

const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' })


let hasMatchingTrait = function (CID, trait_type, trait_value) {

    // Pull the JSON metadata from IPFS, and let's assess it
    ipfs.files.get(CID, function (err, files) {
        files.forEach((file) => {

            let metaData = JSON.parse(file.content.toString('utf8'));

            for (let i = 0; i < metaData.attributes.length; i++) {
                metaData.attributes[i].trait_type == trait_type && metaData.attributes[i].value == trait_value
                console.log("Match!")
                return true;
            }
            return false
            // do some fancy matching to see if the same or similar trait_type and trait_value is present in CID

        })

    })
}
exports.hasMatchingTrait = hasMatchingTrait;

