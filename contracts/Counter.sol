// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Counter {
    int private count = 0;
    function countMe() public {
        count += 1;
    }

    function currentCount() public view returns (int) {
        return count;
    }
}