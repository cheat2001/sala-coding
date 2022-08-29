import React from 'react'
import ReactPlayer from 'react-player'
import LucaVideo from "../video/luca.mp4";
function VideoPlayer() {
    return (
    <div className='w-[100%] min-h-[100vh] overflow-hidden bg-[#0D0D0D]  absolute left-[0] p-6 pl-[100px] top-[0px]'>
        <div className='w-[100%] h-[50vh] sm:h-[70vh]'>
        <ReactPlayer  controls={true} url={LucaVideo}      width='100%'
          height='100%'  />
        </div>
       <div className='text-white mt-[50px]'>
        <div className='w-[100%] h-[1px] bg-[#ffffff88]'></div>
       <h1 style={{fontSize:"30px"}}>Untited video trailer</h1>
        <p style={{fontSize:"25px"}}>2022</p>
       </div>
    </div>
  )
}

export default VideoPlayer