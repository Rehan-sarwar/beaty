import React from 'react'
import { BiCalendar } from 'react-icons/bi';
import { RiWhatsappFill } from 'react-icons/Ri';
import { BsBrowserChrome } from 'react-icons/Bs';
function Now() {
  return (
    <div>
      <div className=' bg-[#F6F6F6] mt-[70px]'>
        <div className='flex justify-around items-center flex-wrap max-w-full py-10'>
          <div>
            <div className='border-[#000000] bg-[#fffbfb] w-full max-w-[375px] h-[131px] mt-10  relative xl:left-60 sm:left left-0  rounded-[20px]  border-[1px] ' >
              <div className='flex gap-5 pt-[30px] py-3  px-7  '>
                <div className='bg-[#D9D9D9]   rounded-[100px] w-[60px] h-[60px] px-[12px] py-[12px]   '>
                  <a className='text-[35px] ' href=""><BiCalendar /></a>
                </div>
                <div>
                  <p className='  font-medium text-[20px]'>BOOK NOW</p>
                  <p className='text-[10px] font-medium text-[#333] max-w-[180px] mt-1'>click the button and follow the instruction</p>
                  <button className='text-[8px] bg-[#D9D9D9] px-6 py-1 rounded-[60px] ml-[135px]'>Click here</button>
                </div>
              </div>
            </div>
            <div className='border-[#000000] bg-white w-full max-w-[375px] h-[131px] mt-10 relative xl:left-10 sm:left left-0    rounded-[20px]  border-[1px] ' >
              <div className='flex gap-4   pt-[20px] px-3 '>
                <div className='bg-[#D9D9D9]   rounded-[100px] w-[64px] h-[64px] px-[10px] py-[9px]   '>
                  <a className='text-[45px] text-green-600 ' href="">< RiWhatsappFill /></a>
                </div>
                <div>
                  <p className='  font-medium  text-[20px]'>FREE CONSULTATION</p>
                  <p className='text-[10px] font-medium text-[#333] max-w-[240px] '>Click the button and connect with us via Whatsapp for a free personalized consultation. Together we will find the best solution in line with your needs</p>
                  <button className='text-[8px] bg-[#D9D9D9] px-6 py-1 rounded-[60px] ml-44'>Click here</button>
                </div>
              </div>
            </div>
            <div className='border-[#000000] bg-[#fffbfb] w-full max-w-[375px] h-[131px] sm:top top-5 relative xl:left-[430px] xl:bottom-10 sm:bottom bottom-0 sm:left left-0  rounded-[20px]  border-[1px] ' >
              <div className='flex gap-5 pt-8  px-3  '>
                <div className='bg-[#D9D9D9]   rounded-[100px] w-[60px] h-[60px] px-[12px] py-[12px]   '>
                  <a className='text-[35px] ' href=""><BsBrowserChrome /></a>
                </div>
                <div>
                  <p className='  font-medium text-[20px]'>BROWSE THE SITE</p>
                  <p className='text-[10px] font-medium text-[#333]'>Discover our services book <br /> from the price list found on each services page</p>
                  <button className='text-[8px] bg-[#D9D9D9] px-6 py-1 rounded-[60px] ml-44'>Click here</button>
                </div>
              </div>
            </div>
          </div>
          <div><img className='w-[64px] max-w-full mb-6 relative bottom-[80px] sm:flex hidden left-32 ' src="/Group2.png" alt="" /></div>
          <div>
            <img className='max-w-[403px] sm:px px-2 sm:mt mt-10 w-full' src="/img7.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Now

