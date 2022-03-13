//SPDX-License-Identifier: UNLICENSED
//Vesion of solidity
pragma solidity ^0.8.8;

//Create a contract
contract Transactions {
    //Solidity definition variables
    uint256 transactionCounter;

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

    function addToBlockchain() public {

    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        //return transactions;

    }

    function getTransactionCount() public view returns (uint256) {
        //return transactionCounter;
    

    }

}
