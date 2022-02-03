# thefamilytoken
Repository for our family token.

# Setup Instruction

- git clone respository
- in repository directory
- npm init --yes
- npm install --save-dev hardhat
- npm install --save-dev @openzeppelin/hardhat-upgrades
- npm install --save-dev @nomiclabs/hardhat-web3
- npm install hardhat-gas-reporter --save-dev
- npm install @openzeppelin/contracts
- edit the hardhat.config.js
- add your keys in there **never check your keys in** 

# Execution Instructions

- open a new console window
- cd to repository directory
- npx hardhat test

- open a second console window
- cd to respository directory
- run command: npx hardhat node

- open a third console window
- run command: npx hardhat console --network localhost

- goto to first console window
- run command: npx hardhat run scripts/deploy.js --network localhost

- goto third console window
- do this actions to test the contract
- execute: const address = '{the address you used to publish}';
- execute: const contract = await ethers.getContractAt("FamilyToken", address);
- execute: await contract4.symbol()
- execute: contact3.totalSupply()
