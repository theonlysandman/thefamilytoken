const { expect } = require("chai");

describe("Token contract", function () {

  it("Do we have the correct symbol", async function () {
    const Token = await ethers.getContractFactory("FamilyToken");

    const hardhatToken = await Token.deploy(100000000000000);

    expect(await hardhatToken.symbol()).to.equal("JEFS");
  });

  it("Initial Token balance", async () => {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("FamilyToken");

    const hardhatToken = await Token.deploy(100000000000000);

    expect(await hardhatToken.balanceOf(owner.address)).to.equal(100000000000000)
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("FamilyToken");

    const hardhatToken = await Token.deploy(100000000000000);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

});
