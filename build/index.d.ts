export type Version = {
  major: number;
  minor: number;
  patch: number;
};

export type NetworkList = {
  keywords?: string[];
  logoURI: string;
  name: string;
  tags?: Record<string, any>;
  timestamp: string;
  networks: Network[];
  version: Version;
};

export type Network = {
  id: string;
  impl: string;
  symbol: string;
  logoURI: string;
  enable: boolean;
  masternode: boolean;
  maintenance: boolean;
  chainId: string;
  code: string;
  shortcode: string;
  name: string;
  shortname: string;
  isTestnet: boolean;
  decimals: number;
  balance2FeeDecimals: number;
  fee: Fee;
  rpcURLs?: Array<Record<string, string>>;
  prices?: Array<Record<string, any>>;
  explorers?: Array<Record<string, any>>;
  extensions?: Record<string, any>;
};

export type Fee = {
  code: string;
  symbol: string;
  decimals: number;
};

export const networkList: NetworkList;
