/**
* AML service business logic
* HTTP Status 200 makes the check pass
*/

const handleRequest = (input, callback) => {

    let responseCode = 200;
    let responseBody = {
        message: "AML check passed",
    };
    console.log("AML check request: " + JSON.stringify(input));
    let response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header": "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    callback(response);


}

/**
 * Lambda function wrapper for the service
 */
exports.handler = (event, context, callback) => {


    handleRequest(event, (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,

            isBase64Encoded: false
        })
    })
}

// Should we want to run straight up vs. as a lambda
module.exports.handleRequest = handleRequest