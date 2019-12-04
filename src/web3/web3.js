import contract from 'truffle-contract'
import BallotContract from '../../build/contracts/Ballot.json'

const Users = {
  contract: null,
  instance: null,
  init() {
    let self = this;

    return new Promise(function (resolve, reject) {
      self.contract = contract(BallotContract);
      self.contract.setProvider(window.web3.currentProvider);

      self.contract.deployed().then(instance => {
        self.instance = instance;
        resolve();
      }).catch(err => {
        reject(err);
      });
    })
  },

  vote() {
    return this.instance.vote.call();
  },
};

export default Users
