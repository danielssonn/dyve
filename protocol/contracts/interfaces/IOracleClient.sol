// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * Interface for Oracle clients to call from contracts and unit tests
 */
interface IOracleClient {
    function requestEligibilityOffChain(address winner)
        external
        returns (bytes32 requestId);

    function requestAMLCheck(address winner)
        external
        returns (bytes32 requestId);
}
