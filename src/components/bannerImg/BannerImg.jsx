import React from 'react'

const BannerImg = ({img}) => {

    const bgImg ={
        backgroundImage: `url(${img})`,
         backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        
    }

  return (
    <div className='2xl:h-[500px]  lg:h-[400px]   xl:h-[400px] sm:h-[300px] xs:h-[100px]  flex justify-center 2xl:mt-30  2xl:mb-10 items-center '>
    <div data-aos="zoom in" className='w-full max-w-none bg-cover bg-center aspect-[16/9] '  
    style={bgImg}></div>
    </div>
  )
}

export default BannerImg