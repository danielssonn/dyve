// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Chainlink Oracle to perform AML check against external API
 * For Chainlink node configuration and adapters setup, see ../adapters/config
 */
contract AMLAdapter is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    uint256 public result;
    address public oracle;
    bytes32 public jobId;
    uint256 private fee;

    constructor() {
        setPublicChainlinkToken();

        oracle = 0x0000000000000000000000000000000000000000;

        // jobs are defined in chainlink console, see ../adapters/config/ for defintions examples
        jobId = "";
        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API responset
     *
     */
    function requestAMLCheck(address checkThisAddress)
        public
        returns (bytes32 requestId)
    {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        request.add("check", toString(abi.encodePacked(checkThisAddress)));
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

    function toString(address account) public pure returns (string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) public pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) public pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes memory data) public pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < data.length; i++) {
            str[2 + i * 2] = alphabet[uint256(uint8(data[i] >> 4))];
            str[3 + i * 2] = alphabet[uint256(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }
}
