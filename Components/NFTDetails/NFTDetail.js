import {GrTextAlignLeft} from 'react-icons/gr'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Dropdown from './Dropdown'

const NFTDetail = ({list}) => {
  const dropdownData = [
    {
      title: "Description",
      icon: <GrTextAlignLeft className='h-5 w-5 text-gray-600'/>,
      content: list.asset.description
    },
    {
      title: "NFT attributes",
      icon: <BsFillBookmarkFill/>,
      // content: "assetContractAddress: " + list.assetContractAddress
      content:  <pre>
                  {JSON.stringify(list.asset.attributes, null, 2) }
                </pre>
    }
  ]
  return (
    <div className='flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black'>
      {dropdownData.map((item, index) => (
        <Dropdown key={index} title={item.title} icon={item.icon} content={item.content}/>
      ))}
    </div>
  )
}

export default NFTDetail