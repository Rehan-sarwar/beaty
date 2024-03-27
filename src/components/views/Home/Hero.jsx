import React from 'react'


function Hero() {
  return (
    <div>
   <div className='flex justify-center flex-wrap  mt-20 '>
  <div>
  <h1 className='Volkhov xl:text-[64px] text-[#333]  font-normal max-w-[600px] animate-slide sm:px px-4 sm:text  text-[40px]  '>Bespoke Beauty Services at home</h1>
  <p className='xl:text-[22px] text-[#000] sm:text text-[18px] sm:px px-4 font-light max-w-[400px] pt-8'>High quality beauty services designed for you, with you, to your home</p>
  <button className='bg-[#313131] text-[#FFF] text-[16px] py-3 px-10 rounded-[100px] mt-[40px] sm:m m-4 '>Book Now</button>
  <img className='max-w-[186px] absolute lg:flex hidden  bottom-[80px] left-[200px]' src="/icon1.png" alt="" />
  <img className='max-w-[186px] absolute lg:flex hidden  left-[330px] bottom-[70px] ' src="/icon2.png" alt="" />
  </div>
   <img className='max-w-full md:px px-2 ' src="/Group1.png" alt="" />
   </div>
    </div>
  
     
    

  )
}

export default Hero