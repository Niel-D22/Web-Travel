import React from "react";
import {FaUserCircel} from "react-icons/fa";
import {Link} from "react-router-dom";
import {NavbarLinks} from "./Navbar";

const navbarLinks =[
      {
    name:"Home",
    link:"/",
  },
  {
    name:"About",
    link:"/about",
  },
  {
    name:"Blogs",
    link:"/blog",
  },
  {
    name:"Best Places",
    link:"/places",
  },
]

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    console.log(setShowMenu,navbarLinks)
  return (<div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed 
  bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
  bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
  transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
    <div className="Navbar_card">

    </div>
  </div>
  )
};

export default ResponsiveMenu;
