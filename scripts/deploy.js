const hre = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const NFTMarket = await hre.ethers.getContractFactory('NFTMarket');
  const nft = await NFTMarket.deploy();

  await nft.deployed();

  console.log('NFT address:', nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
