import React ,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
function VideoCard({image,path}) {
  const navigate=useNavigate('');
    // const tags=image.tags.split(',');
    return (
      <div onClick={()=>navigate(path+"/videoplayer")} className='cursor-pointer max-w-sm shadow-2xl overflow-hidden hover:scale-105 duration-500'>
      <img src={image.webformatURL} alt="" className='w-full h-[200px] object-cover'/>
      <div>
         <div className='px-6 py-4'>
           <div className='font-bold text-white text-xl-mb-2'>
               Title : {image.user}
           </div>
           <ul className='text-[#173e43]'>
             <li>
              <strong>Views:</strong>
              {image.views}
             </li>
             <li>
              <strong>Downloads:</strong>
              {image.downloads}
             </li>
             <li>
              <strong>Likes:</strong>
              {image.likes}
             </li>
           </ul>
         </div>
         <div className='px-6 py-4'>
         {/* {tags.map((tag,index)=>(
           <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
           #{tag}
         </span>
         ))} */}
         
         </div>
      </div>
    </div>
    )
}

export default VideoCard