import React ,{useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
function Navbar({navBarObj}) {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FFFFFF" : "rgba(248, 248, 248, 0.548)",
    };
  };
  
  return (
    <div className="shadow-lg w-full h-[70px] flex items-center bg-[#173e43] pl-[90px]">
         <div className="flex text-white">
            {navBarObj&&navBarObj.map(nbo=>(
               <NavLink className="p-[10px]" key={nbo.id}  style={navLinkStyle} to={nbo.link}>{nbo.title}</NavLink> 
            ))}
           {/* <NavLink style={navLinkStyle} to="">Movies</NavLink>
           <NavLink style={navLinkStyle} to="series">Series</NavLink>
           <NavLink style={navLinkStyle} to="tvshow">TV Show</NavLink> */}
   
         </div>
    </div>
  )
}

export default Navbar