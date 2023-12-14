import { useContract, useNFTs } from '@thirdweb-dev/react'
import React from 'react'
import Container from '../components/Container/Container'
import NFTGrid from '../components/NFT/NFTGrid'
import { NFT_COLLECTION_ADDRESS } from '../const/contractAddresses'

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS)
  const { data, isLoading } = useNFTs(contract)

  return (
    <Container maxWidth="lg">
      <h1>Drop function</h1>
      <p>Get how much you want.</p>
      <iframe
        src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0xBE9277905524A699650Fa6FAD33846E1E879b71f&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=8e6ff03461b28e58908cef50d8b03fcb&theme=dark&primaryColor=purple"
        width="100%"
        height="600px"
      ></iframe>
    </Container>
  )
}
