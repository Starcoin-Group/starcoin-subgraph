import { Collected } from "../generated/schema";
import { getSubgraphConfig } from "./utils/chains";

export function handleCollected(event: Collected): void {
  const { collector, allocatee, amount, collected, expiredAt } = event;
  const subgraphConfig = getSubgraphConfig("conflux-espace-testnet");
  const collectedEntity = new Collected(subgraphConfig.starCollectionAddress);
  collectedEntity.collector = collector;
  collectedEntity.allocatee = allocatee;
  collectedEntity.amount = amount;
  collectedEntity.collected = collected;
  collectedEntity.expiredAt = expiredAt;
  collectedEntity.save();
}
