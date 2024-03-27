import React from 'react'
import Link from 'next/link'

function Services() {
  return (
    <div>
      <div className='text-[41px] text-center mt-8 text-[#333] font-semibold ' >Services</div>
      <div>
        <ul className='flex items-center sm flex-wrap sm:px px-1 justify-center pt-7 gap-16 text-[17px]'>
          <li><a className='text-[17px]' href=""><u>beauty</u></a></li>
          <li><a href="">Spa</a></li>
          <li><a href="">Hair</a></li>
          <li><a href="">Event</a></li>
        </ul>
      </div>
      <div className='flex justify-center flex-wrap  sm:px px-1  gap-5 mt-7  '>
        <Link href={'/blog1'}> 
        <div>
          <button className='absolute xl:mt-[225px] xl:ml-10 max-w-[100%] sm:ml ml-3 sm:m mt-[190px]  bg-[#FFF] text-[22px] text-[#333333]  opacity-75 text-center px-32 rounded-[80px] '>waxing</button>
          <img className=' w-full max-w-[400px]' src="/img1.png" alt="" />
        </div>
        </Link>

        <div>
          <button className='absolute xl:mt-[225px] xl:ml-10 sm:ml ml-3 sm:m mt-[190px]  bg-[#FFF] text-[22px] text-[#333333] opacity-75 text-center px-32 rounded-[80px] '>Nails</button>
          <img className='w-[400px] ' src="/img2.png" alt="" />
        </div>
        <div>
          <button className='absolute xl:mt-[225px] xl:ml-10 sm:ml ml-10 sm:m mt-[190px] md:px px-[50px]    bg-[#FFF] text-[22px] text-[#333333] opacity-75 text-center xl:px-[90px] rounded-[80px] '>brows and lashes</button>
          <img className='w-[400px] ' src="/img3.png" alt="" />
        </div>
      </div>

      <div className='flex justify-center  flex-wrap sm-px px-1 gap-5 mt-5  '>
        <div>
          <button className='absolute xl:mt-[210px] xl:ml-10  bg-[#FFF] text-[22px] sm:ml ml-10 sm:m mt-[190px] sm:px px-[50px]  text-[#333333] opacity-75 text-center xl:px-20 rounded-[80px] '>Facial Treatments</button>
          <img className=' w-full max-w-[400px]' src="/img4.png" alt="" />
        </div>
        <div>
          <button className='absolute  xl:mt-[216px] xl:ml-10  bg-[#FFF] sm:ml ml-3 sm:m mt-[190px] text-[22px] text-[#333333] opacity-75 text-center px-[135px] rounded-[80px] '>Botox</button>
          <img className='w-[400px]' src="/img5.png" alt="" />
        </div>
        <div>
          <button className='absolute xl:mt-[210px] xl:ml-10  bg-[#FFF]  sm:ml ml-3 sm:m mt-[190px] text-[22px] text-[#333333] opacity-75 text-center px-32 rounded-[80px] '>Waxing</button>
          <img className='w-[400px]' src="/img6.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Services