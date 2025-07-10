import React from "react";
import VideoPantai from "../../video/pantai.mp4"
import Hero from "../../components/Hero/hero";

const Home = () => {
  return (
    <>
      <div className="min-h-screen  justify-center ">
        <div className=" relative h-[700px]">

          <video  autoPlay
          loop muted className="absolute right-0 top-0 h-[700px]
          w-full object-cover z-[-1] pointer-events-none">
            
            <source src={VideoPantai} type="video/mp4"
            />
          </video>
          <div className="relativ h-[700px]">
                       <Hero/>
                       </div>
        </div>


      </div>
    </>
  );
};

export default Home;
