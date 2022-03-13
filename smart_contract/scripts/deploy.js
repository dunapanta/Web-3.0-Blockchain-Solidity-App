const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy("Hello, Hardhat!");

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    proccess.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
// When we run the script our transactions is going to be deployed
// and we gonna get the address of our smart contract deployed on the blockchain network
// but our contract to be deployed we need to have some ethereum in our wallet becouse everything I do on ethereum require gas
// we can use faucet.egorfine.com provides test ethereums free of charge
runMain();
