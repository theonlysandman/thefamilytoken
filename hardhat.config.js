require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-web3");
require("hardhat-gas-reporter");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "{}";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "{NEVER SHARE YOUR PRIVATE KEY!}";
const PRODUCTION_PRIVATE_KEY = "{NO REALLY NEVER SHARE YOUR PRIVATE KEY!}";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
   ropsten: {
     url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
     accounts: [`${ROPSTEN_PRIVATE_KEY}`]
   },
  gasReporter: {
    enabled: true,
    currency: 'CFH',
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    url: "http://localhost:8545"
  }
 }
};
