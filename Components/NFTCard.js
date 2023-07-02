import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const NFTCard = ({listItem}) => {
  return (
    <div className="relative flex h-[400px] w-[300px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl ">
      <div className="h-3/4 overflow-hidden">
        <Image className="rounded-t-lg object-cover p-4" src={listItem.asset.image} height={340} width={340} alt='nft'/>
      </div>
      <div className="flex h-1/4 flex-col justify-between p-4 text-black">
        <div className="flex justify-between">
          <div>
            {listItem.asset.collection && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {listItem.asset?.collection?.name}
              </div>
            )}
            <div className ="text-sm font-bold">
              {listItem.asset.name}
            </div>
          </div>
          <div className="flex flex-col items-end justify-center space-y-1">
            <div className="text-xs font-light">Buy at</div>
            <div className="flex items-center justify-end space-x-2">
              <Image height = {16} width= {16} src='/weth-logo.svg' alt='weth'/>
              <div className="">
                {listItem.currencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400"/>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {listItem.asset?.stats?.favorites ?? 0}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard