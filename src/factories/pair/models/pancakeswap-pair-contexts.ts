import {Network} from '../../../networks/models/network';
import { PancakeswapPairSettings } from './pancakeswap-pair-settings';

export interface PancakeswapPairContext {
  fromTokenContractAddress: string;
  toTokenContractAddress: string;
  ethereumAddress: string;
  providerUrl?: string | undefined;
  network: Network
  settings?: PancakeswapPairSettings | undefined;
}
