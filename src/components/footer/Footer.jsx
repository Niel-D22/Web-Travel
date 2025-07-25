import React from "react";
import FooterLogo from "../../assets/travel.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../video/pantai.mp4";
import { Link } from "react-router-dom";

const FooterLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden min-h-[700]">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden
       w-full object-cover z-[-1] "
      >
        {" "}
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div
        className="w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24
         sm:py-0 lg:py-0 fl"
      >
        <div className="h-[500px] grid grid-cols-1 md:grid-cols-2   gap-3 py-5 px-9 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4 bg-amber-100 w-70">
            <h1 className="flex items-center gap--3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} className="max-h-[100px] " />
            </h1>
            <p className="text-sm w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aliquam voluptates expedita animi nam. Asperiores rem, praesentium
              fuga perspiciatis nesciunt voluptatem
            </p>
            <br />
            <div className="flex  items-center gap-3 mt-3 ">
              <FaLocationArrow />
              <p>indonesia, Sulawesi Utara</p>
            </div>
            <div className="flex  items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+628386490650</p>
            </div>
            <div className="flex gap-5 mt-7  h-[60px]">
              <FaInstagram className="text-3xl" />
              <FaFacebook className="text-3xl" />
              <FaLinkedin className="text-3xl" />
            </div>
          </div>
              {/* desk  bagian kanan  */}
        <div className="flex  py-9 px-4 justify-center gap-5  bg-amber-100 ">
          <div className="space-y-2">
            <h1 className="font-bold">Import links</h1>
            <ul className="space-y-3">
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
            </div>
          <div className="space-y-2">
            <h1 className="font-bold">Import links</h1>
            <ul className="space-y-3">
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
            </div>
          <div className="space-y-2">
            <h1 className="font-bold">Import links</h1>
            <ul className="space-y-3">
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
            </div>
          
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
