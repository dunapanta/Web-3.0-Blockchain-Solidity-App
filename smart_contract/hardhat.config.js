//https://eth-ropsten.alchemyapi.io/v2/2DHAurXHiYI6pGruXgvai0TW-T3PwzKs

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2DHAurXHiYI6pGruXgvai0TW-T3PwzKs",
      accounts: ['1238b46727010241038e2186b0ed5d5b7df0d18032107c91545f5cd830e2ecca']
    },
  },
};
