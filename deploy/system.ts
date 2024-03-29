import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deployer } = await getNamedAccounts();

    const system = await deployments.deploy("DeCusSystem", {
        from: deployer,
        args: [],
        log: true,
    });

    const dcs = await deployments.get("DCS");
    await deployments.deploy("SwapFee", {
        contract: "SwapFeeDcs",
        from: deployer,
        args: [hre.ethers.utils.parseEther("100"), 10, 300000, dcs.address, system.address], // TODO: check value before deploy
        log: true,
    });

    await deployments.deploy("SwapRewarder", {
        from: deployer,
        args: [dcs.address, system.address, hre.ethers.utils.parseEther("200"), 0], // TODO: check value before deploy
        log: true,
    });
};

export default func;
func.tags = ["All", "System"];
func.dependencies = ["Token"];
