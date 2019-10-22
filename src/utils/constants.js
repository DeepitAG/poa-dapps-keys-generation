let constants = {}

constants.organization = 'DeepitAG'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.baseURL = '/'

constants.NETWORKS = {
  '191': {
    NAME: 'Pchain',
    BRANCH: 'pchain',
    TESTNET: false
  }
}

module.exports = {
  constants
}
