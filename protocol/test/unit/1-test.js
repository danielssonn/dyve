const { expect } = require("chai");
const { ethers } = require("hardhat")




describe("NFTPool setup", function () {

    before(async function () {

        NFTPool = await hre.ethers.getContractFactory("NFTPool");
        nftPool = await NFTPool.deploy()


    })


    it("Should add another NFT token to pool and retrieve two", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        await (nftPool.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 5912, 'pass', 3, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }));
        // retrieve it from pool based on index
        await (nftPool.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 5913, 'pass', 3, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }));
        await (nftPool.listNFT(1657483887, '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e', 5915, 'pass', 3, 1, 1660163583, { amount: 3500000000, currency: 'ETH' }));

        expect(await nftPool.getAllCount()).to.equal(3);


    });

    describe("NFTLoanVault setup", function () {

        before(async function () {

            NFTLoanVaualt = await hre.ethers.getContractFactory("NFTLoanVault");
            nftLoanVault = await NFTLoanVaualt.deploy()


        })


        it("Should add another NFT token to pool and retrieve two", async function () {
            [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

            await (nftLoanVault.borrowedOn('0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6', { listedOn: 1642192383, tknAddress: '0x7f36182dee28c45de6072a34d29855bae76dbe2f', tknId: 1167, compliance: 'pass', dailyFee: 1, returnCondition: 1, expiry: 1649968383, collateral: { amount: 2250000000, currency: 'ETH' } }, 30, 1644870783, 1500000000, 850000000, 650000000, 66, '0x7f36182dee28c45de6072a34d29855bae76dbe2f', 1, 1644870783));
            await (nftLoanVault.borrowedOn('0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6', { listedOn: 1642192383, tknAddress: '0x7f36182dee28c45de6072a34d29855bae76dbe2f', tknId: 1168, compliance: 'pass', dailyFee: 1, returnCondition: 1, expiry: 1649968383, collateral: { amount: 2250000000, currency: 'ETH' } }, 30, 1644870783, 1500000000, 850000000, 650000000, 66, '0x7f36182dee28c45de6072a34d29855bae76dbe2f', 1, 1644870783));


            expect(await nftLoanVault.getAllCount()).to.equal(2);


        });




    });


});