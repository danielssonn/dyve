// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*
Structure representing NFTListing for a Lender
*/
struct NFTListing {
    uint256 listedOn;
    address tknAddress;
    uint256 tknId;
    uint256 amount;
    uint256 listingLength;
    string compliance;
    uint256 dailyFee;
    ReturnCondition returnCondition;
    uint256 expiry;
    NFTCollateral collateral;
}

struct NFTCollateral {
    uint256 amount;
    string currency;
}

enum ReturnCondition {
    SAME,
    ANY
}
