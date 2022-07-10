// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Mock Oracles for testing
 */
contract MockOracleClient is ChainlinkClient, Ownable {
    constructor() {}

    function requestEligibilityOffChain(address a) external returns (bytes32) {}

    function requestAMLCheck(address a) external returns (bytes32) {}
}
