// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "./NFTListing.sol";

/*
Structure representing pair of listed NFT and its recommended counterpart
*/
struct NFTRecommendation {
    NFTListing listing;
    address tknAddress;
    uint256 tknId;
}
