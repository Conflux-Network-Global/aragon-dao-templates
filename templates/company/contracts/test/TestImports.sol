pragma solidity 0.4.24;

import "@conflux-/aragon-os/contracts/factory/ENSFactory.sol";
import "@conflux-/aragon-os/contracts/factory/APMRegistryFactory.sol";
import "@conflux-/aragon-os/contracts/factory/EVMScriptRegistryFactory.sol";
import "@conflux-/aragon-id/contracts/FIFSResolvingRegistrar.sol";
import "@conflux-/aragon-templates-shared/contracts/Migrations.sol";


// HACK to workaround truffle artifact loading on dependencies
contract TestImports {
    constructor() public {
        // solium-disable-previous-line no-empty-blocks
    }
}
