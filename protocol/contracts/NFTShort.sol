// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/NFTUtility.sol";

contract NFTShort is Ownable, NFTUtility {
    function sell() internal returns (bool) {}

    function buy() internal returns (bool) {}
}
