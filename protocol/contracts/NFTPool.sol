// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";

/**
 * NFTPool managges all NFTs listed by the lender
 */
contract NFTPool is Ownable {
    mapping(address => mapping(uint256 => NFTDeposits)) public listedNFT;
    mapping(address => uint256) public listedNFTCount;

    struct NFTDeposits {
        uint256 tknId;
        address tknAddress;
        uint256 amount;
        uint256 timestamp;
    }

    /**
     * Listing function
     *
     */
    function listNFT(
        address tknAddress,
        uint256 tknId,
        uint256 amount
    ) public {
        // each lender can have multiple NFTs listed
        listedNFTCount[msg.sender] = listedNFTCount[msg.sender] + 1;
        uint256 currentCount = listedNFTCount[msg.sender];
        // 1. List NFT in the Pool
        listedNFT[msg.sender][currentCount] = NFTDeposits(
            tknId,
            tknAddress,
            amount,
            block.timestamp
        );

        // ToDo - 2. Transfer the NFT to this contravt
        // IERC1155(tknAddress).safeTransferFrom(
        //     msg.sender,
        //     address(this),
        //     tknId,
        //     amount,
        //     "0x00"
        // );
    }

    function getAllListedNFTs(address lender)
        public
        view
        returns (NFTDeposits[] memory)
    {
        NFTDeposits[] memory ret = new NFTDeposits[](listedNFTCount[lender]);
        for (uint256 i = 0; i < listedNFTCount[lender]; i++) {
            ret[i] = listedNFT[lender][i];
        }
        return ret;
    }
}
