const { ethers } = require("hardhat");
const hre = require("hardhat");

async function getBalacances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(await getBalacances(address));
  }
}

async function consoleMemo(memos) {
  for (const memo of memos) {
    const time = memo.timestamp;
    const name = memo.name;
    const message = memo.message;
    const from = memo.from;
    console.log(`${time}, ${name}, ${message}, ${from}`);
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const coffee = await hre.ethers.getContractFactory("coffee");
  const contract = await coffee.deploy();
  await contract.deployed();

  console.log("Contract address:", contract.address);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before the buying coffee");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  await contract.connect(from1).buyCoffee("Meeth", "testing", amount);
  await contract.connect(from2).buyCoffee("from2", "testing2", amount);
  await contract.connect(from3).buyCoffee("from3", "testing3", amount);

  console.log("After the buying coffee");
  await consoleBalances(addresses);

  const memos = await contract.getMemos();
  await consoleMemo(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
