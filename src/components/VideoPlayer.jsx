import React from 'react'
import ReactPlayer from 'react-player'
import LucaVideo from "../video/luca.mp4";
function VideoPlayer() {
    return (
    <div className=' w-[100%] min-h-[90vh] overflow-hidden  left-[0]  p-[5px] sm:p-6 sm:pl-[100px] pl-[60px] top-[70px]'>
        <div className='w-[100%] h-[50vh] sm:h-[70vh]'>
        <ReactPlayer className="shadow-9xl"  controls={true} url={LucaVideo}  width='100%'
          height='100%'  />
        </div>
        <div className='text-white mt-[50px] p-[10px]'>
        <div className='w-[100%] h-[1px] bg-[#ffffff88]'></div>
       <h1 className='text-xl sm:text-3xl'>Untited video trailer</h1>
        <p className='sm:text-xl'>2022</p>
       </div>
    </div>
  )
}

export default VideoPlayer