import { BiRefresh, BiLinkExternal} from 'react-icons/bi'
import {MdShare, MdMoreVert } from 'react-icons/md'
import NFTSubInfo from './NFTSubInfo'

const NFTBasicInfo =({name}) => {
  const actionItems = [
    { icon: <BiRefresh className="h-6 w-6 text-gray-500 dark:text-gray:400"/>},
    { icon: <BiLinkExternal className="h-6 w-6 text-gray-500 dark:text-gray:400"/>},
    { icon: <MdShare className="h-6 w-6 text-gray-500 dark:text-gray:400"/>},
    { icon: <MdMoreVert className="h-6 w-6 text-gray-500 dark:text-gray:400"/>},
  ]
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='text-lg font-semibold text-blue-500'>
          SAIT Marketplace
        </div>
        <div className='flex divide-x divide-gray-300 rounded-lg border border-gray-300'>
          {actionItems.map((item, index) => (
            <div key={index} className='flex cursor-pointer items-center justify-center p-3'>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className='pt-6 text-4xl font-bold text-gray-700 dark:text-gray:100'>{name}</div>
      <div className='hidden lg:block'>
        <NFTSubInfo/>
      </div>
    </div>
  )
}

export default NFTBasicInfo