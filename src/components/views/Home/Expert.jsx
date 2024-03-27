import React from 'react'
import { RiWhatsappFill } from 'react-icons/Ri'
function Expert() {
  return (
    <div>
     <div>
       <h1 className='text-[26px] text-[#333] font-semibold text-center mt-[69px]'>Our Experts</h1>
       <div className='flex justify-around flex-wrap items-center mt-[45px]'>
       <div>
        <h1 className='text-[20px] text-[#333] font-medium sm:px px-2'>we provide you with services built to your needs. Just text us!</h1>
        <p className='text-[20px] text-[#333] font-medium max-w-[600px] mt-[37px] sm:px px-2'>we carefully select each professional, whom you can trust, to provide you with high-quality services.</p>
        <div className='flex items-center gap-5 flex-col mt-[32px] '>
        <div className='flex items-center gap-3 bg-[#D5D5D5] max-w-[257px] px-6 py-2 rounded-[60px]'>
         <a className='text-green-600 text-[30px]' href="">< RiWhatsappFill /></a>  
        <button className=' text-[13px]  text-[#333] '>FREE CONSULTATION</button>
        </div>
        <button className='text-[13px] text-[#333] px-7 py-3 bg-[#D5D5D5] rounded-[60px]  '>About Us</button>
       </div>
       </div>
       <img className='max-w-[287px]' src="/Group4.png" alt="" />
       </div>
       <div className='border-[1px] border-[#313131] max-w-[1320px] mt-[37px] m-auto'></div>
      
     </div>
    </div> 
  )
}

export default Expert