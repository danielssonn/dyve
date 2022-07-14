import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-abi-exporter"
import "./tasks";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

/**
 * .env file
 * ALCHEMY_API_KEY = "{Your API key for Kovan network setup in Alchemy}"
 * KOVAN_PRIVATE_KEY = "{Your private key exported from Metamask under Account Details}"
 * 
 */

const { ALCHEMY_API_KEY_KOVAN, ALCHEMY_API_KEY_RINKEBY, PRIVATE_KEY, ETHERSCAN_API_KEY, ALCHEMY_API_KEY_MAINNET } = process.env;



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.7", },
      { version: "0.6.6", },
    ]
  },
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY_KOVAN}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY_RINKEBY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_MAINNET}`,
      }
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  abiExporter: {
    path: './data/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
    format: "json"

  }

};

export default config;