import React from 'react'

function Activities() {
  return (
    <div className='max-w-[1200px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4 '>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white'>RESORTS</h2>
        <img className='w-[1150px] h-[300px] object-cover relative border-4 border-white shadow-lg'  src="https://free4kwallpapers.com/no-watermarks/originals/2015/10/08/wonderful-resort-house.jpg" alt="" />
      </div>
      
      <div className='relative p-4 '>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white'>EXCURSIONS</h2>
        <img className='w-[1150px] h-[300px] object-cover relative border-4 border-white shadow-lg'  src="https://th.bing.com/th/id/R.428c45f416b5156c64a8c3030e170a33?rik=6qpabyEDbmqvbw&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f06%2f4K-Divers-Desktop-Wallpaper-For-PC.jpg&ehk=WdkZpD%2fSbPX9E87rpKovxbjvWKcBXHTYmFwEKVLiuZE%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white'>CRUISES</h2>
        <img className='w-[1150px] h-[300px] object-cover relative border-4 border-white shadow-lg' src="https://th.bing.com/th/id/R.6dbd737f9675c3200719aa91270525ea?rik=hBBA3mkxRtxpLQ&pid=ImgRaw&r=0" alt="" />
      </div>
    </div>
  )
}

export default Activities