import React from "react";
import VideoPantai from "../../video/pantai.mp4";
import Hero from "../../components/Hero/hero";
import Places from "../../components/Places/Places";
import BannerImg from "../../components/bannerImg/BannerImg";
import Posterimg from "../.././assets/banner.png";
import Blogs from "../pages/Blogs"
import Banner2 from "../../components/banner2/banner2"
import BannerDunia from "../../components/bannerImg/bannerDunia"
import Testimoni from "../../components/Testimoni/Testimoni"
const Home = () => {
  return (
    <>
      <div  >
        <div className=" relative min-h-screen ">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 min-h-screen
          w-full object-cover z-[-1] pointer-events-none "
          >
            <source src={VideoPantai} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places />
        <BannerImg img={Posterimg} />
        <Blogs/>
        <Banner2/>
           <BannerDunia/>
           <Testimoni/>
      </div>
    </>
  );
};

export default Home;
