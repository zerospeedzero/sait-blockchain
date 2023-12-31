import { useBuyNow, useContract, Web3Button } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";

const marketAddress = "0x75B9cb48afE6D68Dc4ed40e79741eA8Ca71AC02d"
const NFTSalesInfo = ({price, tokenId, startTimeInSeconds}) => {
  const dateObject = new Date(startTimeInSeconds * 1000)
  return (
    <div className="flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black">
      <div className="flex item-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30]">
        <div className="flex items-center space-x-2">
            <AiOutlineClockCircle className="h-6 w-6 text-gray-400 pr-2"/>{dateObject.toLocaleString('en-GB', { hour12:false } )}
        </div> 
      </div>
      <div className="space-y-4 rounded-t-lg px-6 py-4 dark:bg-[#313339]">
        <div className="space-y-1">
          <div className="font-medium">Buy at</div>
          <div className="flex items-center space-x-2">
            <Image src='/weth-logo.svg' width={24} height={24} alt="nft"/>
            <span className="text-3xl font-bold">{price}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Web3Button
            contractAddress={marketAddress}
            action={ async (contract) => {
                const tx = await contract.directListings.buyFromListing(tokenId, 1)
                console.log("here error" + tx)
              } 
            }
          >
            Buy Now
          </Web3Button>          
        </div>
      </div>
    </div>
  )
}

export default NFTSalesInfo;