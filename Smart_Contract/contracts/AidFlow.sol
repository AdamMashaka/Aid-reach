// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// one address = one proposal
// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AidFlow is Ownable {
    uint256 minValue;
    uint256 prizeIndex;
    ERC20Votes aidToken;
    // ERC20 supportToken;
    uint256 supportAmount;

    constructor(
        uint256 _minValue,
        uint256 _prizeIndex,
        ERC20Votes _aidToken,
        uint256 _supportAmount
    ) {
        minValue = _minValue;
        prizeIndex = _prizeIndex;
        aidToken = ERC20Votes(_aidToken);
        supportAmount = _supportAmount;
        // supportToken = ERC20(_supportToken);
    }

    function donate() public payable {
        require(msg.value > 0, "Amount can't be zero");

        // fil_token.transfer(address(this), _amount);
        if (msg.value >= minValue) {
            uint256 amount = msg.value * prizeIndex;
            aidToken.transfer(msg.sender, amount);
        }
        console.log(
            "You have donated to AidReach.Thanks for reaching out to people in need"
        );
    }

    function withdraw_stake(address addr) public onlyOwner {
        (payable(addr)).transfer(supportAmount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
