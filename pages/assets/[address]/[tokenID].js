import {useRouter} from 'next/router'
import {useAddress} from "@thirdweb-dev/react";
import {useContract, useDirectListing} from '@thirdweb-dev/react'
import NFTImage from '../../../Components/NFTDetails/NFTImage'
import NFTSalesInfo from '@/Components/NFTDetails/NFTSalesInfo'
import NFTDetail from '@/Components/NFTDetails/NFTDetail'
import NFTBasicInfo from '@/Components/NFTDetails/NFTBasicInfo'

const marketAddress = "0x75B9cb48afE6D68Dc4ed40e79741eA8Ca71AC02d"
function getList(listingId) {
  const {contract} = useContract(marketAddress, "marketplace-v3");
  const { data, isLoading, error} = useDirectListing(contract, listingId);
  if (!data) {return []}
  return data
}

const NFT = () => {
  const router = useRouter()
  const { tokenID } = router.query
  const address = useAddress();
  if (!address) {router.push('/')}
  let list = getList(tokenID);

  console.log(list)
  return (
    <div className="h-[calc(100vh-6rem)] mx-auto flex max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24">
      {list.length == 0 ? (
        <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center font-semibold text-gray-700">Loading a NFT listing</div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div>
            <div className="flex flex-col space-y-4">
              <NFTImage image = {list?.asset?.image}/>
            </div>
            <div className="mt-4 rounded-lg">
              <NFTDetail list={list}/>
            </div>
          </div>
          <div className="">
            <NFTBasicInfo name={list?.asset?.name}/>
            <div className="">
              <NFTSalesInfo price={list.currencyValuePerToken.displayValue} tokenId={list.tokenId}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NFT