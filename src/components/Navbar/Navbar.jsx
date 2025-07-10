import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../assets/travel.png";
import {FaCaretDown} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu"

const dropdownLinks= [
  {
    name:"Our Service",
    link:"/#services",
  },
  {
    name:"Top Brands",
    link:"/#mobile_brands",
  },
  {
    name:"Location",
    link:"/#location",
  },
];


const Navbar = () => {
     const [showMenu, setShowMenu]=useState(false);
const toggleMenu =()=>{
  setShowMenu(!showMenu)
}

  return (

    <>
      <div
        className=" fixed top-0 right-0 w-full
 bg-white text-black shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
      >
        <div className="bg-gradient-to-r from-[#0287a8] to-[#00c3c7] text-white ">
          <div className="container mx-auto px-4 sm:px-8 lg:px-22 xl:px-20 2xl:px-24 py-[2px] block  ">
            <div className="flex justify-between ">
              <p>20% off on next booking</p>
              <p>Mobile no. +6283628372</p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24 py-[2px] h-25 sm:py-0 lg:py-0">
          <div className="flex justify-between items-center">
            
            {/* bagian logo   */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoImage} alt="" className="h-28" />
              </Link>
            </div>
            {/* bagian navlink   */}
            <div className="md:block hidden ">
          
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/Blog"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>

                 {/* bagian dropdown */}
                 <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown group  flex items-center"> 
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all
                      duration-200 group-hover:rotate-180"/>
                    </span>
                  </div>
                 <div className="absolute  -left-9 z-[9999] hidden group-hover:block
                 shadow-md text-black w-[150px]  bg-white p-2">
                  <ul>
                    {dropdownLinks.map((data) =>{
                      return(
                      <li key={data.name}>
                        <a className="inline w-full rounded-md p-2 
                        hover:bg-[#0287a8]/20" href={data.link}>{data.name}</a>
                      </li>
                    )})}
                  </ul>
                 </div>
                  
                 </li>

              </ul>
            </div>
           {/* button booking */}
           <div className="flex items-center gap-4 ">
            <button className="bg-gradient-to-r from-[#0287a8]
            to-[#00c3c7] hover:bg-gradient-to-r hover:from-[#00c3c7]
            hover:bg-[#0287a8]
            transition-all duration-600 text-white px-3
            py-1 rounded-full">
              Book Now
            </button>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden block">
              {showMenu?(
                <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transitionn-all" size={30}/>
              ):(
                  <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transitionn-all" size={30}/>
              ) }
            </div>
           </div>
          </div>
        </div>
    <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />

      </div>
    </>
  );
};

export default Navbar;
