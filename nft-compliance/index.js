const https = require('https');
require('dotenv').config({ path: '../.env' })


// NFTPort API provider for authenticity checks
// https://web.postman.co/workspace/My-Workspace~d9c594f2-9116-4d44-8b8d-703ae130be05/request/229235-dd66e671-35cb-475f-baa4-067224f36dfb

const options = {
    hostname: process.env.NFT_PORT_URL,
    port: 443,
    path: process.env.NFT_PORT_COUNTERFIT,
    method: 'POST',
    accept: 'application/json',
    query: { chain: 'ethereum' },
    headers: {
        Authorization: process.env.NFT_PORT_KEY,
    },
};




/**
 * Check if submitted NFT is authentic by running it against NFTPort API
 * @param {*} input 
 * some test data that can be passed into checkAuthenticity:
   let input = {
        "chain": "polygon",
        "contract_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
        "token_id": "9999",
        "page_number": 1,
        "page_size": 50,
        "threshold": 0.9
    }
 */


const authenticityCheck = {
    checked: false,
    status: false,
    is_similar: false,
    comparable_count: 0,

}

const checkAuthenticity = async (input) => {


    let data = {
        "chain": input.chain,
        "contract_address": input.contract_address,
        "token_id": input.token_id,
        "page_number": 1,
        "page_size": 50,
        "threshold": 0.9
    }


    let dataEncoded = JSON.stringify(data);

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        let data = "";
        res.on('data', d => {
            data = data + d

        });
        res.on('end', function () {

            let resJSON;
            try {
                resJSON = JSON.parse(data);
                console.log(resJSON)

            } catch (e) {
                authenticityCheck.checked = true;
                authenticityCheck.status = -1;

                return authenticityCheck;
            }


            if (resJSON.response == "OK") {

                checkAuthenticity.checked = true;
                authenticityCheck.status = 1
                checkAuthenticity.is_similar = resJSON.is_similar;
                checkAuthenticity.comparable_count = resJSON.similar_nfts.length;

                console.log(checkAuthenticity);

                return checkAuthenticity;
            }
            else if (resJSON.response == "NOK") {
                checkAuthenticity.checked = true;
                checkAuthenticity.status = resJSON.error.code;
                console.log(checkAuthenticity);
                return checkAuthenticity;
            } else {
                checkAuthenticity.checked = true;
                checkAuthenticity.status = 'error';
                return checkAuthenticity;
            }

        });
    });

    req.on('error', error => {
        checkAuthenticity.checked = true;
        checkAuthenticity.status = 'error';
        return checkAuthenticity;
    });
    req.write(dataEncoded);
    req.end();

}

exports.checkAuthenticity = checkAuthenticity;