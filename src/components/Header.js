import React from 'react'
import{BsFillChatDotsFill} from 'react-icons/bs'
import{AiFillPhone,AiFillClockCircle} from 'react-icons/ai'



function Header() {

  return (
    <>
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex  items-center '>
        <BsFillChatDotsFill size={30} className='mr-2'/>
        <h1 className='text-xl font-bold text-stone-500'>GLOBAL GETAWAYS</h1>
      </div>
      <div className='flex '>
        <div className='hidden md:flex items-center px-4'>
          <AiFillPhone className='mr-2'/>
          <p className='text-sm text-stone-500'>9376353553</p>
        </div>

        <div className='hidden md:flex items-center px-4'>
          <AiFillClockCircle className='mr-2'/>
          <p className='text-sm text-stone-500'>9AM-5AM</p>

        </div>


      </div>
    </div>
      
    </>
  )
}

export default Header