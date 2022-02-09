export interface Network {
  chainId: number;
  url: string;
  routerAddress: string;
  factoryAddress: string;
  pairAddress: string;
  tokens: {
      BNB: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      COMP: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      DAI: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      USDC: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      USDT: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      FROM_TOKEN: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
      TO_TOKEN: {
          chainId: number;
          contractAddress: string;
          decimals: number;
          symbol: string;
          name: string;
      };
  };
};