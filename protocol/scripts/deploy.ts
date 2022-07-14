import { ethers } from "hardhat";

async function main() {
  const NFTFinder = await ethers.getContractFactory("NFTFinder");
  const nftFinder = await NFTFinder.deploy();

  await nftFinder.deployed();

  console.log("NFTFinder deployed to:", nftFinder.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

