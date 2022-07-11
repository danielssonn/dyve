const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("NFTPool setup", function () {

    before(async function () {

        NFTPool = await hre.ethers.getContractFactory("NFTPool");
        nftPool = await NFTPool.deploy()

        NFTTkn = await hre.ethers.getContractFactory("SimpleERC721");
        nftTkn = await NFTTkn.deploy()
    })

    it("Should add NFT token to pool and retrieve one", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        // mint a token
        mintedTkn = await nftTkn.mintNFT(owner.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1");
        expect(mintedTkn).to.be.ok;
        // add it to pool
        await (nftPool.listNFT(nftTkn.address, 1, 2));

        // retrieve it from pool based on index
        expect(await nftPool.listedNFTCount(owner.address)).to.equal(1)

    });

    it("Should add NFT tokens to pool and retrieve all", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        // mint a token

        // add it to pool

        // retrieve it from pool based on index

    });

});