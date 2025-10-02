# Starcoin Subgraph

A subgraph for indexing Star Collection and Star Redemption smart contracts on Conflux eSpace network using The Graph protocol.

## Overview

This subgraph indexes events from two smart contracts deployed on Conflux eSpace testnet:
- **StarCollection**
- **StarRedemption**

## Events

- `Collected` events from StarCollection contract
- `Redeemed` events from StarRedemption contract

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) package manager
- [The Graph CLI](https://thegraph.com/docs/en/developing/creating-a-subgraph/)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd starcoin-subgraph
```

2. Install dependencies:
```bash
yarn install
```

3. Generate types
```bash
npx graph codegen <subgraph-manifest>
```

## Project Structure

```
starcoin-subgraph/
├── abis/                      # Contract ABIs
│   ├── StarCollection.json
│   └── StarRedemption.json
├── src/                       # Mapping handlers
│   ├── star-collection.ts
│   ├── star-redemption.ts
│   └── utils/
│       └── chains.ts          # Chain configuration
├── schema.graphql             # GraphQL schema definition
├── subgraph.testnet.yaml      # Subgraph manifest for testnet
├── generated/                 # Auto-generated TypeScript types
└── package.json
```

## Schema

### Collected
- `id`: Unique identifier
- `collector`: Address of the collector
- `allocatee`: Address of the allocatee
- `amount`: Amount to be collected
- `collected`: Total collected
- `expiredAt`: Expiration timestamp

### Redeemed
- `id`: Unique identifier
- `user`: Address of the user redeeming
- `amount`: Amount to be redeemed
- `totalCost`: Total cost of redemption

## Configuration

### Testnet
The testnet configuration is defined in `subgraph.testnet.yaml`:

- **Network**: conflux-espace-testnet
- **StarCollection Contract**: `0x8dA847EcFbf2a49B2903640c5Af2EF36B2D0C14F` (start block: 233776835)
- **StarRedemption Contract**: `0xdf03ad381D6b3632a0502f77f13164599C98870c` (start block: 233777125)

## License

GPL-3.0
