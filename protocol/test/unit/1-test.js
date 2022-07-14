const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("NFTMAtcher setup", function () {

    before(async function () {
        Finder = await hre.ethers.getContractFactory("NFTFinder");
        finder = await Finder.deploy()

    })

    it("Should update registry", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        await finder.register({ tknAddress: owner.address, tknId: 15, amount: 10, listingLength: 50 })
        await finder.register({ tknAddress: owner.address, tknId: 16, amount: 10, listingLength: 50 })

        await finder.register({ tknAddress: addr1.address, tknId: 17, amount: 10, listingLength: 50 })


        await finder.updateMatch({ tknAddress: owner.address, tknId: 15, amount: 10, listingLength: 50 }, owner.address, 16)
        await finder.updateMatch({ tknAddress: owner.address, tknId: 15, amount: 10, listingLength: 50 }, owner.address, 17)


        expect(await finder.getMatchTknId({ tknAddress: owner.address, tknId: 15, amount: 10, listingLength: 50 })).to.equal(17)

    });

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


});