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
        uint256 sold;
        uint256 paid;
        int256 PL;
        uint256 loanExpiry;
        uint256 returnedTknId;
        address returnedCollectionAddress;
        LoanStatus status;
        uint256 returnedOn;
    }

    enum LoanStatus {
        INITIAL,
        RETURN_W_DYVE,
        RETURN_SELF,
        FORTEIT_COLLATERAL
    }

    //borrower's loans
    mapping(address => mapping(uint256 => NFTLoan)) public loanedNFT;
    mapping(address => bool) internal borrowerExists;
    address[] public borrowers;

    // Each borrower may have multiple NFTs borrowed
    mapping(address => uint256) public loanedNFTCount;

    function addBorrower(address borrower) internal {
        require(!borrowerExists[borrower]);
        borrowers.push(borrower);
        borrowerExists[borrower] = true;
    }

    function borrow(
        address borrower,
        NFTListing memory listing,
        uint256 loanExpiry
    ) public {
        loanedNFTCount[borrower] = loanedNFTCount[borrower] + 1;
        uint256 currentCount = loanedNFTCount[borrower];
        loanedNFT[borrower][currentCount] = NFTLoan(
            block.timestamp,
            listing,
            0,
            0,
            0,
            loanExpiry,
            0,
            address(0),
            LoanStatus.INITIAL,
            0
        );
    }

    /**
     * Helper to load test data only
     */
    function borrowedOn(
        address borrower,
        NFTListing memory listing,
        uint256 loanExpiry,
        uint256 borroweOn,
        uint256 price1,
        uint256 price2,
        int256 pl,
        uint256 returnTknId,
        address returnedCollectionAdress,
        LoanStatus loanStatus,
        uint256 returnedOn
    ) public {
        loanedNFTCount[borrower] = loanedNFTCount[borrower] + 1;
        uint256 currentCount = loanedNFTCount[borrower];
        loanedNFT[borrower][currentCount] = NFTLoan(
            borroweOn,
            listing,
            price1,
            price2,
            pl,
            loanExpiry,
            returnTknId,
            returnedCollectionAdress,
            loanStatus,
            returnedOn
        );
    }
}
