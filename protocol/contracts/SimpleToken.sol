// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/*
Simple token for testing
*/
contract SimpleToken is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;

    constructor() ERC1155("some metadata link") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**27, "");
    }
}
