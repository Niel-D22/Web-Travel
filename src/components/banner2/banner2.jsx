import React from "react";
import TravelImage from "../../assets/Travel2.png"

const banner2 = () => {
  return (
    <div className="min-h-[550px]  bg-gray-100 mt-120 2xl:mt-0  xl:mt-0 lg:mt-0 md:mt-0">
      <div
        className="min-h-[550px] flex justify-center items-center backdrop-blur-xl
    py-12 sm:py-0"
      >
        <div
          className="w-full mx-auto px-4  sm:px-8 xl:px-20 2xl:px-24
         py-[2px]  sm:py-0 lg:py-"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* bagian gambar */}
            <div>
              <img data-aos="fade" data-aos-duration="500" src={TravelImage} alt="" className="2xl:h-[600px] mx-auto
              drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"/>
            </div>
            {/* bagian text*/}
            <div className="text-center ">
                <h1 data-aos="fade-up" data-aos-duration="500" className="font-bold text-2xl sm:text-4xl"
                >Explore all corners of the world with us </h1>
                <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                     a incidunt obcaecati optio corporis, delectus asperiores minima iusto blanditiis  illum numquam quae? Sit doloribus molestias!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner2;
