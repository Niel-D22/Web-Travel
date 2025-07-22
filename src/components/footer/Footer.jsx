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
    <div className="py-10 relative overflow-hidden min-h-screen">
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
         sm:py-0 lg:py-0"
      >
        <div className="h-[500px] grid grid-cols-1 md:grid-cols-2  gap-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap--3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} className="max-h-[60px]" /> sdds
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aliquam voluptates expedita animi nam. Asperiores rem, praesentium
              fuga perspiciatis nesciunt voluptatem veritatis nemo vero
              aspernatur, eos iste provident sed veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
