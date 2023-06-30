import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const NFTImage =({image}) => {
  return (
    <div className="rounded-lg border dark:border-transparent dark:bg-[#313339]">
      <div className="flex items-center justify-between p-4">
        <Image height={20} width={20} src='/weth-logo.svg' alt='eth'/>
        <div className="flex items-center justify-end space-x-2">
          <AiOutlineHeart className="h-5 w-5 text-gray-500 dark:text-gray-400"/>
          <div className="text-sm font-semibold text-500 dark:text-grey-400">200
          </div>
        </div>
      </div>
      <div className='rounded-b-lg object-cover'>
        {image && <Image src={image} width= {448} height={448} alt="nft"/>}
      </div>
    </div>
  )
}

export default NFTImage