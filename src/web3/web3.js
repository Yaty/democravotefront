import contract from 'truffle-contract'
import BallotContract from '../../build/contracts/Ballot.json'

const Users = {
  contract: null,
  instance: null,

  async init() {
    this.contract = contract(BallotContract);
    this.contract.setProvider(window.web3.currentProvider);
    this.instance = await this.contract.deployed();
  },

  vote(votes) {
    return this.instance.vote(votes);
  },

  getWinner() {
    return this.instance.getWinner();
  },

  processVoteResult() {
    return this.instance.processVoteResult();
  },
};

export default Users
