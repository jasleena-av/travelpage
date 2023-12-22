import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1200px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 text-4xl p-4 mt-5 mb-5'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-2 col-span-2 row-span-2'>
            
                <img className='w-full' src="https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/17576846/pexels-photo-17576846/free-photo-of-taipei-101-skyscraper-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/12558092/pexels-photo-12558092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3559972/pexels-photo-3559972.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3260648/pexels-photo-3260648.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/2350368/pexels-photo-2350368.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery