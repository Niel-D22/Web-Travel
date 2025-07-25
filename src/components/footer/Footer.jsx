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
        <div className="h-[500px] grid    md:grid-cols-3 sm:grid-cols-3  gap-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} className="max-h-[60px]" />
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
            <div className="flex items-center gap-5 mt-6  h-[60px]">
              <a href="">
                {" "}
                <FaInstagram className="text-3xl" />
              </a>
              <a href="">
                {" "}
                <FaFacebook className="text-3xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
             {/* bagian kanan */}


        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                  {/* bagian link 1 */}
          <div>
          <div className="py-8 px-4">
          <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Importan Links</h1>
          <ul className="flex flex-col gap-3">
            {FooterLink.map(( {title , link}) => (
              <li className="cursor-pointer hover:translate-x-1 duration-300
              hover:!text-[#0287a8] space-x-1 text-gray-700">
                <Link to={link}
                onClick={()=>{
                  window.scrollTo(0,0)
                }}>
                <span>&#11162;</span>
                <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
        {/* bagian link 2 */}
        <div >
          <div className="py-8 px-4">
           <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Importan Links</h1>
          <ul className="flex flex-col gap-3">
            {FooterLink.map(({link, title}) => (
              <li className="cursor-pointer hover:translate-x-1 duration-300
              hover:!text-[#0287a8] space-x-1 text-gray-700">
                <Link to={link}
                onClick={()=>{
                  window.scrollTo(0,0)
                }}>
                <span>&#11162;</span>
                <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
        {/* bagian link 3 */}
        <div>
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Importan Links</h1>
          <ul className="flex flex-col gap-3">
            {FooterLink.map(({link, title}) => (
              <li className="cursor-pointer hover:translate-x-1 duration-300
              hover:!text-[#0287a8] space-x-1 text-gray-700">
                <Link to={link}
                onClick={()=>{
                  window.scrollTo(0,0)
                }}>
                <span>&#11162;</span>
                <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
  </div>
        </div>

 {/* bagian foooter copy right  */}
        <div >
          <div className=" bg-[#0287a8] text-center py-5 border-t2 border-gray-300/50 text-white">
             @copyrigth All rights reserved || Made with by Daniel
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
