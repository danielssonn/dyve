const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("Award budget pre setup", function () {

    before(async function () {
        MockOracle = await hre.ethers.getContractFactory("MockOracleClient");
        mock = await MockOracle.deploy();

        Award = await hre.ethers.getContractFactory("Award");
        award = await Award.deploy(mock.address, mock.address)
    })

    it("Should revert minting with low budget", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        expect(award.mintWinner(addr1.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")).to.be.reverted;
    });


    describe("Award budget setup", function () {
        before(async function () {
            MockOracle = await hre.ethers.getContractFactory("MockOracleClient");
            mock = await MockOracle.deploy();

            Award = await hre.ethers.getContractFactory("Award");
            award = await Award.deploy(mock.address, mock.address)
        })

        it("Should set budget budget", async function () {
            [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
            let overrides = {
                value: ethers.utils.parseEther("1.0")
            };
            await award.addToAwardsBudget(overrides);

            expect(await award.getTotalAwardBudget()).to.equal(ethers.utils.parseEther("1.0"));
        });

        it("Should revert for wrong winner", async function () {
            expect(award.mintWinner(owner.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")).to.be.revertedWith('Sorry, the organizers cannot win awards!');
        });

        it("Should set award cycle", async function () {
            expect(await award.awardDate()).to.be.above(0);
        });


        describe("Mint Award", function () {
            before(async function () {
                await award.mintWinner(addr1.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")
            })

            it("Should have decreased the budget", async function () {

                expect(await award.getTotalAwardBudget()).to.be.below(ethers.utils.parseEther("1.0"))


            });
            it("Should have one winner for one Award", async function () {

                expect(await award.winerAwardCount(addr1.address)).to.equal(1)
                expect(await award.wonAwards(addr1.address, 1)).to.equal(100)
                expect(await award.wonTimestamps(addr1.address, 1)).to.be.ok


            });

            it("Should have one winner for two Award", async function () {
                await award.mintWinner(addr1.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")
                expect(await award.winerAwardCount(addr1.address)).to.equal(2)
                expect(await award.wonAwards(addr1.address, 2)).to.equal(100)
                expect(await award.wonTimestamps(addr1.address, 2)).to.be.ok

            });
            it("Should have created NFTs with correct IDs", async function () {
                expect(await award.mintedCertificates(addr1.address, 2)).to.equal(2)

            });

            describe("Withdraw Awards", function () {


                it("Should get award not vested yet", async function () {

                    expect(await award.isAwardVested(addr1.address, 1)).to.equal(false)

                });

                it("Should not be withdrawable if not vested and revert", async function () {

                     expect(award.connect(addr1).withdrawAwardETH(1)).to.be.revertedWith('This award still needs to vest');

                });




            })
        })

    })



});