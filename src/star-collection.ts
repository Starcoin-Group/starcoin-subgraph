import { Bytes } from "@graphprotocol/graph-ts";
import { Collected } from "../generated/schema";
import { Collected as CollectedEvent } from "../generated/StarCollection/StarCollection";

export function handleCollected(event: CollectedEvent): void {
  const collectedEntity = new Collected(
    event.transaction.hash
      .concat(Bytes.fromUTF8("-"))
      .concatI32(event.logIndex.toI32())
  );
  collectedEntity.collector = event.params.collector.toHexString();
  collectedEntity.allocatee = event.params.allocatee.toHexString();
  collectedEntity.amount = event.params.amount;
  collectedEntity.collected = event.params.collected;
  collectedEntity.expiredAt = event.params.expiredAt;
  collectedEntity.blockNumber = event.block.number;
  collectedEntity.blockTimestamp = event.block.timestamp;
  collectedEntity.transactionHash = event.transaction.hash;
  collectedEntity.save();
}
