import { Keypair } from "@solana/web3.js";
import fs from "fs";
//Now we're going to create a new Keypair, like so:

//Generate a new keypair
let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key: [${kp.secretKey}]`);
// fs.writeFileSync(
//   "dev-wallet.json",
//   JSON.stringify(Array.from(kp.secretKey), null, 2),
//   "utf-8"
// );

// console.log("Secret key successfully saved to dev-wallet.json");
