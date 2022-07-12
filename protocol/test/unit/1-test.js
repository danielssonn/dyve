const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("NFTPool setup", function () {

    before(async function () {

        NFTPool = await hre.ethers.getContractFactory("NFTPool");
        nftPool = await NFTPool.deploy()

        NFTTkn = await hre.ethers.getContractFactory("SimpleToken");
        nftTkn = await NFTTkn.deploy()
    })

    it("Should add NFT token to pool and retrieve one", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        await (nftTkn.setApprovalForAll(nftPool.address, true));
        // address of NFT, ID, amount t                
        await (nftPool.listNFT(nftTkn.address, 0, 1, 2));
        // retrieve it from pool based on index
        expect(await nftPool.listedNFTCount(owner.address)).to.equal(1);

    });

    it("Should add another NFT token to pool and retrieve two", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        await (nftPool.listNFT(nftTkn.address, 1, 1, 2));
        // retrieve it from pool based on index
        expect(await nftPool.listedNFTCount(owner.address)).to.equal(2);

    });

});