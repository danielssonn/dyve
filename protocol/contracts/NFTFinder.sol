// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./NFTListing.sol";
import "./NFTRecommendation.sol";

/**
Finds another NFT that is just like the listed one
 */
contract NFTFinder is Ownable {
    //registry
    NFTListing[] registry;

    //recommendation
    mapping(uint256 => NFTRecommendation) public recommendation;

    /**
     * register NFTListing to be matched
     */
    function register(NFTListing memory listing) public {
        // TODO will need to de-dup this more elegantly ....
        bool alreadyRegistered = false;
        for (uint256 i = 0; i < registry.length; i++) {
            if (
                (registry[i].tknAddress == listing.tknAddress) &&
                (registry[i].tknId == listing.tknId) &&
                (registry[i].amount == listing.amount) &&
                (registry[i].listingLength == listing.listingLength)
            ) {
                alreadyRegistered = true;
            }
        }
        if (!alreadyRegistered) {
            registry.push(listing);
        }
    }

    /**
     * Update registry with match. TODO Probably too optimistic matching, and might want to hash the listings for cheaper comparison ...
     */
    function updateMatch(
        NFTListing memory listing,
        address recommendedCollection,
        uint256 recommendedId
    ) public {
        for (uint256 i = 0; i < registry.length; i++) {
            if (
                (registry[i].tknAddress == listing.tknAddress) &&
                (registry[i].tknId == listing.tknId)
            ) {
                recommendation[i] = NFTRecommendation(
                    listing,
                    recommendedCollection,
                    recommendedId
                );
            }
        }
    }

    /**
     * Return recommended match. TODO Probably too optimistic matching, and might want to hash the listings for cheaper comparison ...
     */
    function getMatch(NFTListing memory listing)
        public
        view
        returns (NFTRecommendation memory)
    {
        for (uint256 i = 0; i < registry.length; i++) {
            if (
                (registry[i].tknAddress == listing.tknAddress) &&
                (registry[i].tknId == listing.tknId)
            ) {
                return recommendation[i];
            }
        }
        return NFTRecommendation(listing, address(0), 0);
    }

    function getMatchTknId(NFTListing memory listing)
        public
        view
        returns (uint256)
    {
        return getMatch(listing).tknId;
    }
}
