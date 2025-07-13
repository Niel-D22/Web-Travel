import React from "react";
import VideoPantai from "../../video/pantai.mp4";
import Hero from "../../components/Hero/hero";
import Places from "../../components/Places/Places";
import BannerImg from "../../components/bannerImg/BannerImg";
import Posterimg from "../.././assets/banner.png";

const Home = () => {
  return (
    <>
      <div  >
        <div className=" relative h-[689px]  ">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px]
          w-full object-cover z-[-1] pointer-events-none "
          >
            <source src={VideoPantai} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places />
      
        <BannerImg img={Posterimg} />
      </div>
    </>
  );
};

export default Home;
