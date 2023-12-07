/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from '@thirdweb-dev/chains'
export const NETWORK = Mumbai

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = '0xd9f840662Aa74C7D5cf8a3c4ac92D4023f8dBc8B'

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  '0x0bFDfD18a5c785B9c53b7dd16C4e7A4DaA56DB73'

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = 'https://mumbai.polygonscan.com'
