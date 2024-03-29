import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deployer } = await getNamedAccounts();

    await deployments.deploy("SATS", {
        from: deployer,
        args: [],
        log: true,
    });

    await deployments.deploy("DCS", {
        from: deployer,
        args: [],
        log: true,
    });
};

export default func;
func.tags = ["All", "Token"];
