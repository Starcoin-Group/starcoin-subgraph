import { Redeemed } from "../generated/schema";
import { getSubgraphConfig } from "./utils/chains";

export function handleRedeemed(event: Redeemed): void {
  const { user, amount, totalCost } = event;
  const subgraphConfig = getSubgraphConfig("conflux-espace-testnet");
  const redeemedEntity = new Redeemed(subgraphConfig.starRedemptionAddress);
  redeemedEntity.user = user;
  redeemedEntity.amount = amount;
  redeemedEntity.totalCost = totalCost;
  redeemedEntity.save();
}
