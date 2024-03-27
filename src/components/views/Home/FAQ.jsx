import React from 'react'
// import { RxDividerHorizontal } from 'react-icons/Rx'
// import { AiOutlinePlus } from 'react-icons/Ai'
function FAQ() {
  return (
    <div>
      <div>
        <p className='text-[26px] font-semibold text-center text-[#333] pt-[50px]'>Help/FAQ</p>
        <p className='text-[20px] text-[#595959]  text-center mt-[15px]'>About our Mobile Hair and Beauty services in London</p>

        <div className='flex  gap-4  justify-center sm:px px-1 mt-[46px]' >
          <div className='bg-[#333] mt-[5px]  w-[20px] h-[20px] text-[#fff] text-center rounded-[50px] p-[2px] pt-[2px]'><RxDividerHorizontal /></div>
          <div>
            <h1 className='text-[20px] text-[#333] items-center font-medium'>What is HariBnb?</h1>
            <p className='text-[#595959] text-[15px] max-w-[500px] font-medium mt-[18px]'>Bringing High qualified professionals & spa experiences to your door in London. Hair styling, make up & spa for groups & individuals, weddings, special events & photoshoots.</p>
          </div>
        </div>
        <div className='flex  max-w-[1165px] items-center gap-4 itm justify-center  mt-[34px] ' >
          <div className='bg-[#333]  w-[20px] h-[20px] p-[1.8px] pt-[2px] text-[#fff] text-center rounded-[50px]'><AiOutlinePlus /></div>
          <h1 className='text-[20px] text-[#333] font-medium'>What is HariBnb?</h1>
        </div>
        <div className='flex  max-w-[1290px] items-center gap-4 itm justify-center  mt-[34px] ' >
          <div className='bg-[#333]  w-[20px] h-[20px] p-[1.8px] pt-[2px] text-[#fff] text-center rounded-[50px]'><AiOutlinePlus /></div>
          <h1 className='text-[20px] text-[#333] font-medium'>Do I need to prepare anything?</h1>
        </div>
        <div className='flex  max-w-[1250px] items-center gap-4 itm justify-center  mt-[34px] ' >
          <div className='bg-[#333]  w-[20px] h-[20px] p-[1.8px] pt-[2px] text-[#fff] text-center rounded-[50px]'><AiOutlinePlus /></div>
          <h1 className='text-[20px] text-[#333] font-medium'>Do I need to wash my hair?</h1>
        </div>
        <div className='flex  max-w-[1268px] gap-4 items-center justify-center  mt-[34px] ' >
          <div className='bg-[#333]  w-[20px] h-[20px] p-[1.8px] pt-[2px] text-[#fff] text-center rounded-[50px]'><AiOutlinePlus /></div>
          <h1 className='text-[20px] text-[#333] font-medium'>Will there be a mess to clear?</h1>
        </div>
        <h1 className='text-[15px] text-center font-medium text-[#616161] mt-[35px]'>See all our FAQs</h1>
      </div>
    </div>
  )
}

export default FAQ