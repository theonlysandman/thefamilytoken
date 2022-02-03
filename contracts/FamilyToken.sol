// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract FamilyToken is ERC20, ERC20Votes, Ownable {

    uint256 public constant minimumMintInterval = 365 days;
    uint256 public constant mintCap = 200; // 2%

    constructor(uint256 freeSupply)
      ERC20("The Family Token", "JEFS")
      ERC20Permit("The Family Token")
    {
      _mint(msg.sender, freeSupply);
    }


     function getBalanceOfToken(address _address) public view returns (uint256) {
       return ERC20(_address).balanceOf(address(this));
     }

     function transferFrom(address _sender, address _recipient, uint256 _amount)
       public virtual override returns (bool)  {
       return super.transferFrom(_sender, _recipient, _amount);
     }

     // The following functions are overrides required by Solidity.

     function _afterTokenTransfer(address from, address to, uint256 amount)
         internal
         override(ERC20, ERC20Votes)
     {
         super._afterTokenTransfer(from, to, amount);
     }

     function _mint(address to, uint256 amount)
         internal
         override(ERC20, ERC20Votes)
     {
         super._mint(to, amount);
     }

     function _burn(address account, uint256 amount)
         internal
         override(ERC20, ERC20Votes)
     {
         super._burn(account, amount);

}}
