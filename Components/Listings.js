import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import NFTCard from './NFTCard';
import Link from 'next/link';
const marketAddress = "0x75B9cb48afE6D68Dc4ed40e79741eA8Ca71AC02d"
function getLists() {
  const {contract} = useContract(marketAddress, "marketplace-v3");
  const { data, isLoading, error} = useValidDirectListings(contract);
  if (!data) {return []}
  return data
}

const Listings = () => {
  let lists = getLists();
  // console.log(lists); 
  return (
    <>
      {lists.length > 0 ? (
        <div className="mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:grid-cols-4 sxl:grid-cols-5">
        {lists.map((listItem, index)=> (
          <div key={index}>
            <Link legacyBehavior href = {`/assets/${listItem.assetContractAddress}/${listItem.id}`}>
              <a><NFTCard listItem={listItem}/></a>
            </Link>
          </div>
        ))}
      </div>
      ) : (
        <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center font-semibold text-gray-700">Loading NFT from BlockChain Network...</div>
      )}
    </>
  )
}

export default Listings