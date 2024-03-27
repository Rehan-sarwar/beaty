import React from 'react'

function Work() {
  return (
    <div>
      <div className='bg1 bg-[#BDBDBD] bg-opacity-[0.2]   rounded-l-[129px]  rounded-r-[20px] rounded-b-[10px] max-w-[1240px] h-[407px] mt-[75px] m-auto'>
        <h1 className='text-[33px]  text-center text-[#333]   font-semibold pt-[30px]'>Work with Us</h1>
        <div className='flex justify-center flex-wrap gap-3 sm:mt mt-[5px] sm:px px-2  xl:mt-[40px]'>
          <input className='text-[14px] text-[#39425D] px-8 font-normal rounded-[10px] py-6 max-w-full  w-[421px]' type="text" placeholder='Name' />
          <input className='text-[14px] text-[#39425D] px-8 font-normal rounded-[10px] py-6 max-w-full  w-[421px]' type="text" placeholder='Email' />
        </div>
        <div className='flex justify-center gap-3 flex-wrap sm:px px-2 sm:mt mt-[5px] xl:mt-[20px]'>
          <input className='text-[14px] text-[#39425D] px-8 font-normal rounded-[10px] py-6 max-w-full  w-[421px]' type="text" placeholder='services offered' />
          <input className='text-[14px] text-[#39425D] px-8 font-normal rounded-[10px] py-6 max-w-full  w-[421px]' type="text" placeholder='Area of expertise' />
        </div>
        <div className='flex justify-center sm:mt mt-[10px] xl:mt-[30px] '><input className='bg-white w-[219px] py-4 text-[14px] text-[#39425D] rounded-[10px]' type="submit" /></div>
      </div>
    </div>
  )
}

export default Work