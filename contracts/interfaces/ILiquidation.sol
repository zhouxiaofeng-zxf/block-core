// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ILiquidation {
    function receiveFund(IERC20 asset, uint256 amount) external;

    event AssetAuctioned(
        address indexed operator,
        address asset,
        uint256 amount,
        uint256 discountSatsAmount
    );

    event InitialData(
        uint256 startTimestamp,
        uint256 duration,
        address asset,
        uint256 initialAmount
    );
}
