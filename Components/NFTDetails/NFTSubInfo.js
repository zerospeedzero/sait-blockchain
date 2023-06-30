import { AiFillEye, AiFillHeart} from 'react-icons/ai'

const NFTSubInfo = () => {
  return (
    <div className='flex space-x-6 py-6'>
      <div className=' text-lg font-medium text-gray-500 dark:text-gray-400'>
        Owned by <span className='text-blue-500'>George</span>
      </div>
      <div className='flex items-center text-lg font-medium text-gray-500 dark:text-gray-400'>
        <AiFillEye className=''/>
        <div className=''>1.4 view</div>
      </div>
      <div className='flex items-center text-lg font-medium text-gray-500 dark:text-gray-400'>
        <AiFillHeart className=''/>
        <div className=''>20 favorites</div>
      </div>
    </div>
  )
}
export default NFTSubInfo