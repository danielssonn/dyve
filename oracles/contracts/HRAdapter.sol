// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Chainlnk Oracle to perform HR check against external API
 * For Chainlink node configuration and adapters setup, see ../adapters/config
 */
contract HRAdapter is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    uint256 public result;
    address public oracle;
    bytes32 public jobId;
    uint256 private fee;

    constructor() {
        setPublicChainlinkToken();

        oracle = 0x7cBF93692cbBA821E69660221Ce604e73a80B40F;

        // jobs are defined in chainlink console, see ./config/ for defintions examples
        jobId = "";

        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    function requestEligibilityOffChain() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, uint256 _result)
        public
        recordChainlinkFulfillment(_requestId)
    {
        result = _result;
    }

    /**
     * Set new jobID on the oracle. The jobs cannot be edited, new jobId is required for each change. See /config/JobIdXY.toml for job specs
     */
    function setOracleJobId(string memory _jobId) external {
        jobId = stringToBytes32(_jobId);
    }

    /**
     * Set new jobID on the oracle. The jobs cannot be edited, new jobId is required for each change. See /config/JobIdXY.toml for job specs
     */
    function setOracleAddress(address _oracle) external {
        oracle = _oracle;
    }

    /**
     * Conversion to input strings in Etherscan UI
     */
    function stringToBytes32(string memory source)
        private
        pure
        returns (bytes32 converted)
    {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            converted := mload(add(source, 32))
        }
    }
}
