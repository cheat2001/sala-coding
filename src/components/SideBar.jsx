import React from 'react'
import { NavLink } from 'react-router-dom';
import Education from "../Images/SideBar/diploma.png";
import entertain from "../Images/SideBar/entertain.png";
import newspaper from "../Images/SideBar/newspaper.png";
import Home from "../Images/SideBar/house.png";

function SideBar() {
   const navLinkStyle= ({ isActive }) => {
    return{
        backgroundColor:isActive?"#3fb0ac":"transparent",
        transition:isActive?"1s":"1s",
        borderRadius:isActive?"15%":"15%",
    }
   }

  return (
    <div className='overflow-hidden sm:justify-start bottom-0 sm:top-0 z-10 sm:border-r-[0.5px] sm:border-[#4d7c62] shadow-2xl border-t-[0.5px] border-[#ffffff7c] fixed w-[100%] sm:w-[70px] h-[70px] sm:h-[100vh] bg-[#173e43] flex sm:flex-col items-center sm:pt-[70px] '>
      <NavLink style={navLinkStyle} to="/"  className="w-[100%] py-[20px] px-[0] sm:p-5  duration-300 flex justify-center items-center">
        <img src={Home} alt="" className='w-[35px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/education"  className="w-[100%] py-[20px] sm:p-5 duration-300 flex justify-center items-center">
        <img src={Education} alt="" className='w-[35px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/entertain" className="w-[100%] py-[20px]  sm:p-5  duration-300 flex justify-center items-center">
        <img src={entertain} alt="" className='w-[35px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/news" className="w-[100%] py-[20px] sm:p-5  duration-300 flex justify-center items-center">
        <img src={newspaper} alt="" className='w-[35px]'/>
      </NavLink>
    </div>
  )
}

export default SideBar