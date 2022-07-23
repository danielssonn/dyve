let Stomp = require('stompjs');
require('dotenv').config({ path: '../.env' })



// update .env and delete from here
// COVALENT_KEY = "ckey_b780cce192f14bf8bf37d7a5c7c"
// COVALENT_URL = "wss://api.covalenthq.com/v1/?key="

const COVALENT_KEY = process.env.COVALENT_KEY
const COVALENT_URL = process.env.COVALENT_URL
const covalentURL = COVALENT_URL + COVALENT_KEY;

let blockchainSubscriber = Stomp.overWS(covalentURL);
blockchainSubscriber.heartbeat.incoming = 0;
blockchainSubscriber.heartbeat.outgoing = 10000;
let wsTimeout = 5000;
let resetWStimeOut;


/**
 * Connect to STOMP brodcast topic
 */
let connect = blockchainSubscriber.connect({}, (frame) => {
    covalentConnected();
}, (error) => {
    console.log("You disconnected: " + error);
    blockchainSubscriber.disconnect(function () {
        setTimeout(() => {
            reconnect(covalentURL, covalentConnected);
        }, wsTimeout);

    });
});

/**
 * Once STOMP broadcast is connected, publish received blockchain events to all NFTQ subscribers to process the event.  Example refresh metadata, process it, verify for counterfits etc.
 */
function covalentConnected() {
    console.log('STOMP Connected ... ');
}

/**
 * Reconnect the STOMP client
 * @param {*} socketUrl 
 * @param {*} successCallback 
 * @returns 
 */
function reconnect(socketUrl, successCallback) {

    if (blockchainSubscriber.connected) {
        blockchainSubscriber.disconnect();
        return;
    }

    clearTimeout(resetWStimeOut);
    console.log("Trying to reconnect...");
    let connected = false;

    blockchainSubscriber = Stomp.overWS(socketUrl);
    blockchainSubscriber.heartbeat.incoming = 0;
    blockchainSubscriber.heartbeat.outgoing = 10000;
    blockchainSubscriber.connect({}, (frame) => {
        connected = true;
        successCallback();
        wsTimeout = 5000;
        clearTimeout(resetWStimeOut);
    }, () => {
        if (connected) {
            setTimeout(() => {
                reconnect(socketUrl, successCallback);
            }, wsTimeout);
        }
    });
    if (!blockchainSubscriber.connected) {
        resetWStimeOut = setTimeout(() => {
            reconnect(socketUrl, successCallback);
        }, wsTimeout += 1000);
    }

}
exports.connect = connect;
exports.subscriber = blockchainSubscriber;
