import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-abi-exporter"
import "./tasks";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const {
  ALCHEMY_API_KEY_KOVAN,
  ALCHEMY_API_KEY_RINKEBY,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  ALCHEMY_API_KEY_MAINNET,
  ALCHEMY_GOERLI
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.7" }, { version: "0.6.6" }],
  },
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_MAINNET}`,
      },
    },
    localhost: {
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      // 1: 0,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: '../nft_gateway/data/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
    format: "json",
    only: ['NFT*']
  }
};

export default config;
