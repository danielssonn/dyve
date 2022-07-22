// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTListing.sol";

/**
 * Contract to describe all Loans, the collateral and conditions accepted by the borrower
 */
contract NFTLoans is Ownable {
    // Structure to represent loan - from listing to all agreed on conditions
    struct NFTLoan {
        uint256 borrowedOn;
        NFTListing listing;
        uint256 paid;
        uint256 sold;
    }
    //borrower's loans
    mapping(address => mapping(uint256 => NFTLoan)) public loanedNFT;
}
