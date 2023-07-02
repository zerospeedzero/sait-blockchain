import { useState } from 'react'
import { BiRefresh, BiLinkExternal} from 'react-icons/bi'
import {MdShare, MdMoreVert } from 'react-icons/md'
import Modal from 'react-modal'
import NFTSubInfo from './NFTSubInfo'

const NFTBasicInfo =({name, list}) => {
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
     overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
     },
     content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
     }
  }  
  const message = () => {
    alert("This function is not implemented yet.")
  }
  const open = () => {
    setIsOpen(true)
  }
  const actionItems = [
    { icon: <BiRefresh className="h-6 w-6 text-gray-500 dark:text-gray:400"/>, action: message},
    { icon: <BiLinkExternal className="h-6 w-6 text-gray-500 dark:text-gray:400"/>, action: message},
    { icon: <MdShare className="h-6 w-6 text-gray-500 dark:text-gray:400"/>, action: message},
    { icon: <MdMoreVert className="h-6 w-6 text-gray-500 dark:text-gray:400"/>, action: open},
  ]
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='text-lg font-semibold text-blue-500'>
          SAIT Marketplace
        </div>
        <div className='flex divide-x divide-gray-300 rounded-lg border border-gray-300'>
          {actionItems.map((item, index) => (
            <div key={index} className='flex cursor-pointer items-center justify-center p-3' onClick={item.action}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className='pt-6 text-4xl font-bold text-gray-700 dark:text-gray:100'>{name}</div>
      <div className='hidden lg:block'>
        <NFTSubInfo/>
      </div>
      <Modal className="bg-gray-200/80 rounded-lg flex flex-col h-[100hv] fixed top-[10rem] left-[5%] right-[5%]" isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className='bg-black/90 flex flex-row justify-between items-center'>
          <h1 className='text-white/70 text-xl p-4'>NFT listing detail</h1>
          <button className="bg-blue-400 text-white p-3 mr-4 rounded-lg" onClick={() => setIsOpen(false)}>Return</button>
        </div>
        <div className="w-auto overflow-scroll overflow-y-visible p-4">
          <p className="text-black text-sm">{JSON.stringify(list, null, 2)}</p>
        </div>
      </Modal>      
    </div>
  )
}

export default NFTBasicInfo