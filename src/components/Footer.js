import React from 'react'
import{BsFillChatDotsFill} from 'react-icons/bs'

function Footer() {
  return (
    <div className='flex w-full h-full m-3 p-3  text-gray-700' >
        <div className=' flex items-center m-auto justify-center ' >
            <BsFillChatDotsFill size={20} className='mr-2 ml-2'/>
        <h1 className='mr-4'>GLOBAL GETAWAYS</h1>
        </div>
    </div>
  )
}

export default Footer