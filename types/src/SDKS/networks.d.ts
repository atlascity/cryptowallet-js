export declare const token = "token=f4d997113b76452393a65216e046ab77";
export declare const ethToken = "2JAADVNZG512YIZSCF7S6JDXS8QI7PSUFY";
export declare const BITCOIN: {
    name: string;
    bip: number;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            private: number;
            public: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const LITECOIN: {
    name: string;
    bip: number;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const LITECOIN_TESTNET: {
    name: string;
    type: string;
    bip: number;
    segwit: boolean;
    discovery: string;
    broadcastUrl: string;
    connect: {
        messagePrefix: string;
        bip32: {
            private: number;
            public: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const DASH: {
    name: string;
    bip: number;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const DASH_TESTNET: {
    name: string;
    bip: number;
    segwit: boolean;
    discovery: string;
    broadcastUrl: string;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const DOGECOIN: {
    name: string;
    bip: number;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const DOGECOIN_TESTNET: {
    name: string;
    bip: number;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            private: number;
            public: number;
        };
        wif: number;
        public: number;
        scripthash: number;
    };
};
export declare const VIACOIN: {
    name: string;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const VIACOIN_TESTNET: {
    name: string;
    segwit: boolean;
    connect: {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
export declare const ETHEREUM: {
    name: string;
    bip: number;
    sendTxApi: string;
};
export declare const ETHEREUM_ROPSTEN: {
    name: string;
    networkName: string;
    bip: number;
    sendTxApi: string;
    getTranApi: string;
    getBalanceApi: string;
    getErc20TranApi: string;
    provider: string;
    chainId: number;
};
export declare const BITCOIN_TESTNET: {
    name: string;
    type: string;
    bip: number;
    segwit: boolean;
    discovery: string;
    broadcastUrl: string;
    sendTxApi: string;
    getTranApi: string;
    decodeTxApi: string;
    connect: {
        messagePrefix: string;
        bech32: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
};
