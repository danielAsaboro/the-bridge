# Solana Development Project

## Transaction Link
Successfully completed the final project! View the transaction here:
[Transaction Link](https://explorer.solana.com/tx/5eSdcKuJ8D7fAXXk9eJM8cjXoZHv1zGy3x8rUPRDuGbsa6LL6D6ved9rZ564MoPNdFHn16K14Eh5gA3RnNC3i5ZH?cluster=devnet)

## Project Overview
This project contains several TypeScript files that interact with the Solana blockchain on devnet. Each file serves a specific purpose in managing Solana wallets and transactions.

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/danielAsaboro/the-bridge.git
```

2. Install dependencies using Yarn
```bash
yarn install
```

3. Create a dev-wallet.json file with your wallet credentials (if not existing)

## Available Scripts

You can run the following scripts using yarn:

```bash
yarn keygen    # Generate a new Solana keypair
yarn airdrop   # Request devnet SOL tokens
yarn transfer  # Transfer SOL between wallets
yarn enroll    # Complete WBA prerequisite enrollment
```

## Files and Their Functions

### 1. keygen.ts
This file generates a new Solana wallet keypair.
- Generates a new keypair using Solana web3.js
- Displays the public key in base58 format
- Can save the secret key to a `dev-wallet.json` file (commented out for security)

### 2. airdrop.ts
Requests an airdrop of devnet SOL tokens to your wallet.
- Connects to Solana devnet
- Requests 2 SOL tokens
- Uses the keypair from dev-wallet.json
- Outputs the transaction hash upon success

### 3. transfer.ts
Transfers SOL tokens between wallets on devnet.
- Creates a transaction to transfer 0.01 SOL
- Uses SystemProgram for the transfer
- Includes transaction signing and confirmation
- Outputs the transaction signature for verification

### 4. enroll.ts
Handles enrollment in the WBA prerequisite program.
- Connects to the WBA prerequisite program
- Uses Anchor framework for program interaction
- Completes enrollment using your GitHub username
- Creates and sends a transaction for enrollment verification

## Dependencies
```json
{
  "dependencies": {
    "@coral-xyz/anchor": "0.30.0",
    "@solana/web3.js": "1.91.8",
    "@types/node": "^22.10.1",
    "bs58": "^6.0.0",
    "rpc-websockets": "7.11.0",
    "typescript": "^5.7.2"
  },
  "devDependencies": {
    "ts-node": "^10.9.2"
  }
}
```

## Requirements
- Node.js
- Yarn (version 4.4.1 or compatible)
- TypeScript

## Note
Make sure you have enough devnet SOL before running transfer.ts. You can get devnet SOL using the airdrop script.