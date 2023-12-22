import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1200px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 text-3xl mt-4 mb-4'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2 mb-3'> We're standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' alt="/" />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border p-2 m-2' type="text" placeholder='First' />
                    <input className='border p-2 m-2' type="text" placeholder='Last' />
                    <input className='border p-2 m-2' type="text" placeholder='Email' />
                    <input className='border p-2 m-2' type="text" placeholder='Phone' />
                    <input className='border col-span-2 m-2 p-2' type="text" placeholder='address' />
                    <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                    <button className='border col-span-2 m-1 p-2 text-white bg-cyan-500'>Submit</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact