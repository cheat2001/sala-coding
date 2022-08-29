import React from 'react'
import {BsFacebook,BsYoutube,BsTwitter,BsGithub} from "react-icons/bs";
function Footer() {
  return (
    <div className="w-[100%] h-[400px] bg-[#173e43] mt-[150px] flex flex-col items-center pt-[50px] sm:pl-[50px] text-teal-50 gap-[20px]">
      <h1 className="text-2xl">Community Support</h1>
      <div className='flex text-3xl'>
          <a href="#" className='p-[10px]'>
            <BsFacebook className='text-[#3253e7]'/>
          </a>
          <a href="#"  className='p-[10px]'>
            <BsYoutube className='text-[#9e1e3e]'/>
          </a>
          <a href="#"  className='p-[10px]'>
            <BsTwitter className='text-[#37a1df]'/>
          </a>
          <a href="#"  className='p-[10px]'>
            <BsGithub/>
          </a>
      </div>
    </div>
  )
}

export default Footer