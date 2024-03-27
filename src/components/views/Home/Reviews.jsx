import React from 'react'
import Slider from 'react-slick'
import { BsStarFill } from 'react-icons/Bs'
import { FaFacebook } from 'react-icons/Fa'
import { FcGoogle } from 'react-icons/Fc'


function Reviews() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  
  };
  
  

  var cards = [
    {image:'Ellipse1.png', name:'J.James', para:'Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputatei'},

    {image:'Ellipse2.png', name:'J.James', para:'Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputatei'},

    {image:'Ellipse4.png', name:'J.James', para:'Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputatei'},

  ]  
  return (
    <div>
      <div className='text-[41px] text-[#333] font-semibold   text-center max-w-full px-3 mt-6'>Reviews</div>
      <div>
          {/* <img className='max-w-[12px]  ' src="/Vector1.png" alt="" /> */}
        <div className=' sm:px px-3 gap-12 items-center xl:px-[30px]'>


        <Slider {...settings}>
        {cards.map((v,i)=>{
          return(
             
             <div className='bg-[#FFF] px-10 py-8 rounded-[20px]  shadow-lg shadow-black-500'>
            <div className='flex items-center gap-5'>
              <img  src={v.image} alt="" />
              <p className='text-[20px] text-[#313131 ]'>{v.name}</p>
            </div>
            <div className='flex items-center pt-6  justify-center   gap-2'>
              <div className='flex gap-2 items-center text-yellow-300'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>on</p>
              <a href="">< FcGoogle /></a>
              <a className='text-blue-600' href=""><FaFacebook /></a>
              <img src="/image3.png" alt="" />
            </div>
            <p className='text-[13px] text-center max-w-[300px] text-[#06040A] pt-3 font-light'>Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputate.</p>
          </div>
           )
          })}  
          </Slider>

          {/* <div><img className='max-w-[12px] appearance-none  cursor-pointer ' src="/Vector2.png" alt="" /></div> */}

        </div>
      </div>
    
    </div>
  )
}

export default Reviews