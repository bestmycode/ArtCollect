import { ColorMode, NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

export const TEZOS_COLLECT_NETWORK = {
  type: NetworkType.GHOSTNET,
};

const MAINNET_RPC_URL = "https://mainnet.api.tez.ie";
const GHOSTNET_RPC_URL = "https://rpc.tzkt.io/ghostnet";

const TEZOS_COLLECT_RPC_URL =
  TEZOS_COLLECT_NETWORK.type === NetworkType.GHOSTNET
    ? GHOSTNET_RPC_URL
    : MAINNET_RPC_URL;
export const Tezos = new TezosToolkit(TEZOS_COLLECT_RPC_URL);
export const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxM2MwOGZEQjVCMDNGQWRkYzVEYWE1ODk5ZkY4NjY5YWE2ZGZBRDAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDUwODU3OTgwNCwibmFtZSI6IkdlbmVzeSJ9.ZTjxdK3K9Rr14USOXMCcrOkvBCuyVi6MKlI7Uhv4ufg";
// Create a new DAppClient instance
export const TEZOS_COLLECT_WALLET = new BeaconWallet({
  name: "Art Collect",
  preferredNetwork: TEZOS_COLLECT_NETWORK.type,
  colorMode: ColorMode.LIGHT
});

const MARKETPLACE_ADDRESSES = {
  ghostnet: "KT1JZsjLVE4Dx7B7xDiD459XBo7aPejnrv86",
  kathmandunet: "",
  mainnet: "",
  mondaynet: "",
  dailynet: "",
  delphinet: "",
  edonet: "",
  florencenet: "",
  granadanet: "",
  hangzhounet: "",
  ithacanet: "",
  jakartanet: "",
  custom: "",
};

const NFT_ADDRESSES = {
  ghostnet: "KT18yToJwQVHvdc4NKFji1Zdc8p5tD9LyckV",
  kathmandunet: "",
  mainnet: "",
  mondaynet: "",
  dailynet: "",
  delphinet: "",
  edonet: "",
  florencenet: "",
  granadanet: "",
  hangzhounet: "",
  ithacanet: "",
  jakartanet: "",
  custom: "",
};

export const VAULT_ADDRESS = "tz1VL5AfvZ3Cz6Bd2c2agcUQe7HKxje7ojNu";

export const MARKETPLACE_CONTRACT_ADDRESS =
  MARKETPLACE_ADDRESSES["ghostnet"];

export const NFT_CONTRACT_ADDRESS = NFT_ADDRESSES["ghostnet"];

// export const API_ENDPOINT =
//   process.env.NODE_ENV === "development"
//     ? "http://192.168.113.103:80"
//     : "https://api.genesy.xyz";

export const API_ENDPOINT = "https://api.genesy.xyz";
