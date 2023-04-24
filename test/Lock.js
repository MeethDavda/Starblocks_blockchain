const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Coffee", function () {
  let coffee;
  let owner;
  let alice;

  beforeEach(async function () {
    const Coffee = await ethers.getContractFactory("coffee");
    [owner, alice] = await ethers.getSigners();

    coffee = await Coffee.deploy();
    await coffee.deployed();
  });

  it("should allow users to buy coffee and record memos", async function () {
    const name = "Alice";
    const message = "Thanks for the great coffee!";
    const value = ethers.utils.parseEther("0.1");

    await coffee.connect(alice).buyCoffee(name, message, { value });

    const memos = await coffee.getMemos();
    expect(memos.length).to.equal(1);
    expect(memos[0].name).to.equal(name);
    expect(memos[0].message).to.equal(message);
    expect(memos[0].from).to.equal(alice.address);
  });

  it("should not allow users to buy coffee with 0 ETH", async function () {
    const name = "Bob";
    const message = "Can I have a free coffee?";
    const value = ethers.utils.parseEther("0");

    await expect(
      coffee.connect(alice).buyCoffee(name, message, { value })
    ).to.be.revertedWith("You need to send more that 0 ETH!");
  });
});
