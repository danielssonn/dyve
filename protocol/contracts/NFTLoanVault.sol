// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTListing.sol";

/**
 * Contract to describe all Loans, the collateral and conditions accepted by the borrower
 */
contract NFTLoanVault is Ownable {
    // Structure to represent loan - from listing to all agreed on conditions
    struct NFTLoan {
        uint256 borrowedOn;
        NFTListing listing;
        uint256 paid;
        uint256 sold;
        uint256 PL;
    }
    //borrower's loans
    mapping(address => mapping(uint256 => NFTLoan)) public loanedNFT;

    // Each borrower may have multiple NFTs borrowed
    mapping(address => uint256) public loanedNFTCount;

    function borrow(address borrower, NFTListing memory listing) public {
        loanedNFTCount[borrower] = loanedNFTCount[borrower] + 1;
        uint256 currentCount = loanedNFTCount[borrower];
        loanedNFT[borrower][currentCount] = NFTLoan(
            block.timestamp,
            listing,
            0,
            0,
            0
        );
    }

    /**
     * Helper to load test data only
     */
    function borrowAt(
        address borrower,
        NFTListing memory listing,
        uint256 time
    ) public {
        loanedNFTCount[borrower] = loanedNFTCount[borrower] + 1;
        uint256 currentCount = loanedNFTCount[borrower];
        loanedNFT[borrower][currentCount] = NFTLoan(time, listing, 0, 0, 0);
    }
}
