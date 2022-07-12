// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./NFTListing.sol";

/**
Finds another NFT that is just like the listed one
 */
contract NFTFinder is Ownable {
    function find(NFTListing memory findLikeThis) internal returns (ERC1155) {}
}
