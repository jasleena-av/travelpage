import React from 'react'

function Booking() {
  return (
    <div id='deals' className='max-w-[1200px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items=center'>
          <div className='flex flex-col my-2 py-2'>
            <label>Destinations</label>
            <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
              <option >Maldives</option>
              <option >Singapore</option>
              <option >Beijing</option>
              <option >Bali</option>
            </select>
          </div>
          <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label >Check-in</label>
              <input className='border rounded-md p-2' type="Date" />
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label>Check-out</label>
              <input className='border rounded-md p-2' type="Date" />
            </div>
          </div>
          <div className='flex flex-col my-2 py-2 w-full'>
            <label>Search</label>
            <button className='w-full border py-2  bg-cyan-500 text-white'>Rates and Availabilities</button>
          </div>
            
        </form>

    </div>
  )
}

export default Booking