import React from "react";
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";


const navbarLinks = [
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

  return (<div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed 
  bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
  bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
  transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
 
    <div className="Navbar_card">
    {/* bagian atas */}
  <div>
    <FaUserCircle size={50} className="text-[#0287a8]"/>
    <div>
        <h1>Hello User</h1>
        <h1 className="text-sm text-slate-500" >Premium user</h1>
    </div>
  </div>

    {/* bagian links*/}
    </div>
  </div>
  )
};

export default ResponsiveMenu;
