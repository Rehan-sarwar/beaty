
import React from 'react'

function Treatment() {
  return (
    <div>
      <div className='bg-[#F6F6F6] py-10 mt-[40px] '>
        <div className='flex  justify-around flex-wrap gap-14 mt-[60px]'>
          <div className='bg-[#ffff] rounded-[15px] py-8  px-24 '>
            <h1 className='text-[26px] text-[#333] font-medium text-center '>Other Products</h1>
            <div className='flex gap-10  flex-wrap justify-center mt-[36px]'>
              <img className='max-w-[188px]' src="/image10.png" alt="" />
              <img className='max-w-[188px]' src="/image10.png" alt="" />
            </div>
            <h1 className='text-[26px] text-[#333] font-medium text-center mt-[26px]' >View All</h1>
          </div>
          <div className='bg-[#ffff] py-8 px-14 rounded-[15px]'>
            <h1 className='text-[26px] text-[#333] font-medium text-center '>Other Treatments</h1>
            <div className='flex gap-5 flex-wrap justify-center mt-[36px]'>
              <img className='max-w-[227px] w-full' src="/image13.png" alt="" />
              <img className='max-w-[227px]  w-full' src="/image13.png" alt="" />
            </div>
            <h1 className='text-[26px] text-[#333] font-medium text-center mt-[26px]' >View All</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Treatment
