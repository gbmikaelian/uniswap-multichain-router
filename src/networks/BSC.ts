import { ChainId } from "../enums/chain-id";
import { Network } from "./models/network";

export const BSC: Network = {
    chainId: ChainId.BSC,
    url: 'https://bsc-dataseed.binance.org/',
    routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    pairAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    tokens: {
        BNB: {
            chainId: ChainId.BSC,
            contractAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
            decimals: 18,
            symbol: 'WBNB',
            name: 'Wrapped Binance token',
        },
        COMP: {
            chainId: ChainId.BSC,
            contractAddress: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
            decimals: 18,
            symbol: 'COMP',
            name: 'Compound',
        },
        DAI: {
            chainId: ChainId.BSC,
            contractAddress: '0x26a5dfab467d4f58fb266648cae769503cec9580',
            decimals: 18,
            symbol: 'DAI',
            name: 'Dai Stablecoin',
        },
        USDC: {
            chainId: ChainId.BSC,
            contractAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
            decimals: 18,
            symbol: 'USDC',
            name: 'USD Coin',
        },
        USDT: {
            chainId: ChainId.BSC,
            contractAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            decimals: 18,
            symbol: 'BUSD',
            name: 'Binance-Peg BUSD Token',
        },
        FROM_TOKEN: {
            chainId: ChainId.BSC,
            contractAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            decimals: 18,
            symbol: 'CAKE',
            name: 'PancakeSwap Token',
        },
        TO_TOKEN: {
            chainId: ChainId.BSC,
            contractAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            decimals: 18,
            symbol: 'BUSD',
            name: 'Binance-Peg BUSD Token',
        }
    }
}