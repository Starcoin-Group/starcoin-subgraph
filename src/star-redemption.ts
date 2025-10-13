import { Bytes } from "@graphprotocol/graph-ts";
import { Redeemed as RedeemedEvent } from "../generated/StarRedemption/StarRedemption";
import { Redeemed } from "../generated/schema";

export function handleRedeemed(event: RedeemedEvent): void {
  const redeemedEntity = new Redeemed(
    event.transaction.hash
      .concat(Bytes.fromUTF8("-"))
      .concatI32(event.logIndex.toI32())
  );
  redeemedEntity.user = event.params.user.toHexString();
  redeemedEntity.amount = event.params.amount;
  redeemedEntity.totalCost = event.params.totalCost;
  redeemedEntity.blockNumber = event.block.number;
  redeemedEntity.blockTimestamp = event.block.timestamp;
  redeemedEntity.transactionHash = event.transaction.hash;
  redeemedEntity.save();
}
