var Ballot = artifacts.require("./Ballot.sol");

module.exports = function(deployer) {
  deployer.deploy(Ballot, ["0x727D55887AE21836F931d6FDA7390777e154e898",
    "0x6876DC2c64eb26f05be4a06984C20776b6587fF4",
    "0x5892661D310406caFAf75974a5d4ad356880066D",
    "0x9D298f0bF553F890405c6DF9537a067bB2620788"]);
};
