const DEFAULT_NETWORK = 'devnet'
const LOCAL_NETWORKS = ['devnet', 'rpc']

module.exports = web3 => {

  async function getNetworkId() {
    return new Promise((resolve, reject) =>
      web3.version.getNetwork((error, result) => error ? reject(error) : resolve(result))
    )
  }

  async function getNetworkName() {
    // const id = await getNetworkId()
    // const { networks } = require('@aragon/os/truffle-config')
    // const networkName = Object.keys(networks).find(name => networks[name].network_id == id)
    // return networkName || DEFAULT_NETWORK
    return "cfx-testnet"
  }

  async function isLocalNetwork() {
    // const networkName = await getNetworkName()
    // return LOCAL_NETWORKS.includes(networkName)
    return true
  }

  return {
    getNetworkId,
    getNetworkName,
    isLocalNetwork
  }
}
