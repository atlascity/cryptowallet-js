import BitcoinSDK from './SDKS/bitcoin'
import EthereumSDK from './SDKS/ethereum'
import * as ISDK from './SDKS/ISDK'

export namespace CryptoWallet {

  export function createSDK(sdk: string): ISDK.CryptoWallet.SDKS.ISDK {
    switch (sdk) {
      case 'Bitcoin':
        return new BitcoinSDK()

      case 'Ethereum':
        return new EthereumSDK()

      default:
        return new BitcoinSDK()
    }
  }
}
