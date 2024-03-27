import {HiPhone} from 'react-icons/Hi';
import {PiEnvelopeSimpleThin} from 'react-icons/Pi';
function Footer() {
  return (
    <div>
        <div className='xl:flex justify-center flex-wrap    sm:px px-4 gap-32 mt-[42px] '>
            <div>
               <h1 className='text-[20px] text-[#595959] font-medium '>Menu</h1>
                <p className='text-[13px] text-[#313131] font-normal mt-[32px]'>Beauty</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Spa</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Hair</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Event</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Shop</p>
            </div>
            <div>
              <h2 className='text-[20px] text-[#595959] font-medium'>Information</h2> 
                <p className='text-[13px] text-[#313131] font-normal mt-[32px]'>Home</p>              
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>About</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Gallery</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Price list</p>
                <p className='text-[13px] text-[#313131] font-normal pt-[22px]'>Book</p>
            </div>
            <div>
               <h3 className='text-[20px] text-[#595959] font-medium'>Content</h3>
               <div className='flex items-center gap-2 mt-[22px]'>
                <HiPhone/>
                <p className='text-[13px] text-[#313131] font-medium'>+44 (0) 7923 903816</p>
               </div>
               <div className='flex items-center mt-[19px]  gap-2'>
                <PiEnvelopeSimpleThin/>
                <p className='text-[13px] text-[#313131] font-medium'>myplacehairbandb@gmail.com</p>
               </div>
               <p className='text-[13px] text-[#313131] font-medium mt-[28px] '>Privacy Policy</p>
               <p className='text-[13px] text-[#313131] font-medium mt-[22px]'>Cookie Policy</p>
            </div>
            <div>
               <h4 className='text-[20px] text-[#595959] font-medium'>Content</h4>
                <p className='text-[13px] text-[#313131] font-medium max-w-[200px] mt-[28px]' >MON-SAT 08:00 – 20:00SUN 10:00 – 17:00</p>
                <p className='text-[20px] text-[#595959] font-medium pt-[12px] mt-[35px] '>Follow us</p>
                 <img className='mt-[30px]'  src="/Social2.png" alt="" />
            </div>
        </div>
       <div className='border-[1px] border-[#595959] mt-[33px]'></div>
       <div className='text-[15px] text-[#595959] font-medium text-center mt-[14px]'>©Copyright 2022 HairBnb</div>
    </div>
  )
}

export default Footer