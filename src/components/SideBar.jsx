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
        borderRadius:isActive?"25%":"25%",
    }
   }

  return (
    <div className='z-10 border-r-[0.5px] border-[#4d7c62] shadow-lg fixed w-[70px]  h-[100vh] bg-[#173e43] flex flex-col items-center pt-[70px]'>
      <NavLink style={navLinkStyle} to="/"  className="w-[100%] p-5 hover:bg-purple-500 duration-300">
        <img src={Home} alt="" className='w-[50px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/education"  className="w-[100%] p-5 hover:bg-purple-500 duration-300">
        <img src={Education} alt="" className='w-[50px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/entertain" className="w-[100%] p-5 hover:bg-purple-500 duration-300">
        <img src={entertain} alt="" className='w-[50px]'/>
      </NavLink>
      <NavLink style={navLinkStyle} to="/news" className="w-[100%] p-5 hover:bg-purple-500 duration-300">
        <img src={newspaper} alt="" className='w-[50px]'/>
      </NavLink>
    </div>
  )
}

export default SideBar