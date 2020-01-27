pragma solidity >=0.4.22 <0.6.0;

contract Ballot {

    /* TYPES */

    /* EVENTS */

    /* VARIABLES */

    address owner;

    mapping(address => uint) private candidatesMapping;
    address[] private candidatesAddress;

    mapping(address => address[]) private votersAddressMapping;
    address[] private votersAddress;

    /*  FUNCTIONS  */

    constructor(address[] memory candidates) public {
        owner = msg.sender;
        for(uint i = 0; i < candidates.length; i++) {
            candidatesMapping[candidates[i]] = 0;
            candidatesAddress.push(candidates[i]);
        }
    }

    function vote(address[] calldata votes) external alreadyVoted {
        require(votes.length >= 3, "Le tableau des votes de l'utilisateur est inferieur à 3");
        votersAddressMapping[msg.sender] = votes;
        votersAddress.push(msg.sender);
    }

    function processVoteResult() external {

        for(uint i = 0; i < votersAddress.length; i++) {

            address current_voter = votersAddress[i];

            uint weight = 3;
            for(uint j = 0; j < 3; j++) {

                address candidat = votersAddressMapping[current_voter][j];

                candidatesMapping[candidat] = candidatesMapping[candidat] + weight;
                weight--;

            }
        }

    }

    function getWinner() external view returns(address, uint) {

        address currentWinner = candidatesAddress[0];
        uint currentCountVote = candidatesMapping[candidatesAddress[0]];

        for(uint i = 1; i < candidatesAddress.length; i++) {
            if(currentCountVote < candidatesMapping[candidatesAddress[i]]) {
                currentWinner = candidatesAddress[i];
                currentCountVote = candidatesMapping[candidatesAddress[i]];
            }
        }

        return (currentWinner, currentCountVote);
    }

    /* GETTERS */

    function getCandidatesList() external view returns(address[] memory){
        return candidatesAddress;
    }

    function getCandateVoteCount(address candidate) external view returns(uint){
        return candidatesMapping[candidate];
    }

    function getVotersAddressList() external view returns(address[] memory){
        return votersAddress;
    }

    function getOwner() external view returns(address){
        return owner;
    }

    /* PURE FUNCTIONS */

    /* MODIFIERS */

    modifier alreadyVoted() {
        require(!(votersAddressMapping[msg.sender].length > 0), "L'utilisateur a déjà voté");
        _;
    }

}
