require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/42efc57d92be428aa5045acf5abf951d',
      accounts: [
        '5a5c802e90e700b3aef1dac25f263e9d2343f8303629dd84520e899b299afb97',
      ],
    },
  },
};
