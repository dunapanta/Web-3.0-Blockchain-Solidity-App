//SPDX-License-Identifier: UNLICENSED
//Vesion of solidity
pragma solidity ^0.8.8;

//Create a contract
contract Transactions {
    //Solidity definition variables
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount +=1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // to make the transfer we need to emmit an event
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;

    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    

    }

}
