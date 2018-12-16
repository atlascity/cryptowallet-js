
export namespace CryptoWallet.SDKS {
  export interface ISDK {

    generateHDWallet(entropy: string, network: string): Object;

    generateKeyPair(wallet: object, index: number, internal?: boolean): Object;

    importWIF(wif: string, network: string): Object;

    createRawTx(
      accounts: object[],
      change: string[],
      utxos: any,
      wallet: any,
      toAddress: string,
      amount: number): Object;

    broadcastTx(rawTx: object, network: string): Object;

    // getUTXOs(addresses: Array<String>, network: string): Object;

    verifyTxSignature(transaction: object, network: string): boolean;

    accountDiscovery(entropy: string, netork: string, internal?: boolean): Object;

    getTransactionHistory(
      addresses: Array<String>,
      network: string,
      from: number,
      to: number,
    ): Object;

    getBalance(addresses: string[], network: string): Object;

    // getWalletHistory(
    //   addresses: Array<String>,
    //   network: string,
    //   lastBlock: number,
    //   full?: boolean): Object;

    // getTransactionHistory(
    // address: string,
    // network: string,
    // lastBlock: number,
    // beforeBlock?: number,
    // limit?: number): Object;


  }
}
