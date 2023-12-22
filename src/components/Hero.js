import React from 'react'
import img from '../assets/hero img.jpg'




function Hero() {
  return (
    <div className='w-full h-[100vh]'>
      <img src={img} alt="/" className='w-full h-full object-cover' />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[30%]  w-full md:50% max-w-[600px] h-full flex flex-col text-stone-800 p-4'>
          <h1 className='text-4xl font-bold '>Find Your Special Trip</h1>
          <h2 className='text-3xl font-italic '>With Global Getaways</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt alias et veritatis repellendus labore distinctio consequuntur at quo! Sequi magni non reiciendis, est dignissimos iusto aliquam eos ut mollitia?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero