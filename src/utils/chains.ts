const CONFLUX_ESPACE_TESTNET = "conflux-espace-testnet";
const CONFLUX_ESPACE = "conflux-espace";

export interface SubgraphConfig {
  starCollectionAddress: string;
  starRedemptionAddress: string;
}

export const getSubgraphConfig = (chainName: string): SubgraphConfig => {
  switch (chainName) {
    case CONFLUX_ESPACE_TESTNET:
      return {
        starCollectionAddress: "0x8dA847EcFbf2a49B2903640c5Af2EF36B2D0C14F",
        starRedemptionAddress: "0xdf03ad381D6b3632a0502f77f13164599C98870c",
      };

    case CONFLUX_ESPACE:
      throw new Error(`Chain ${chainName} not deployed`);
    default:
      throw new Error(`Chain ${chainName} not supported`);
  }
};
