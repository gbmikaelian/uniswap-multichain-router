import { ChainId } from "../enums/chain-id";
import { Network } from "./models/network";


export const Avalanche: Network = {
    chainId: ChainId.AVALANCHE,
    url: 'https://api.avax.network/ext/bc/C/rpc',
    routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    factoryAddress: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    pairAddress: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    tokens: {
        BNB: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
            decimals: 18,
            symbol: 'WAVAX',
            name: 'Wrapped Avax token',
        },
        COMP: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xc3048e19e76cb9a3aa9d77d8c03c29fc906e2437',
            decimals: 18,
            symbol: 'COMP',
            name: 'Compound',
        },
        DAI: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
            decimals: 18,
            symbol: 'DAI',
            name: 'Dai Stablecoin',
        },
        USDC: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
            decimals: 6,
            symbol: 'USDC',
            name: 'USD Coin',
        },
        USDT: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xc7198437980c041c805a1edcba50c1ce5db95118',
            decimals: 6,
            symbol: 'USDT',
            name: 'Tether USD',
        },
        FROM_TOKEN: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0x60781c2586d68229fde47564546784ab3faca982',
            decimals: 18,
            symbol: 'PNG',
            name: 'Pangolin',
        },
        TO_TOKEN: {
            chainId: ChainId.AVALANCHE,
            contractAddress: '0xc7198437980c041c805a1edcba50c1ce5db95118',
            decimals: 6,
            symbol: 'USDT.e',
            name: 'Tether USD',
        }

    }
}
