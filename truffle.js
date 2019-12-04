const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'plastic easy spot page chef winter garbage gym obscure ketchup cream sniff mountain ball blood';
const kovan = "https://kovan.infura.io/v3/0918b5085ed74f6b94f3d49a415b2eb7";

module.exports = {
  networks: {
    kovan: {
      uri: kovan,
      provider: function() {
        return new HDWalletProvider(mnemonic, kovan)
      },
      network_id: 42
    }
  }
};
