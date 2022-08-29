import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import VideoSearch from "../components/VideoSearch";
import {useParams} from "react-router-dom"
function Container({search}) {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState([true]);
  const currentURL = window.location.href // returns the absolute URL of a page

  const pathname = window.location.pathname //returns the current url minus the domain name
  // console.log("Current URL: " + currentURL);
  // console.log("Pathname: " + pathname);
  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    // .then((res) => res.json())
    // .then((data)=>console.log(data))
    // .catch((err)=>console.log(err))

    fetch(`https://pixabay.com/api/?key=29545295-3b1e9fad88fa8a36b80fb5a37&q=${search}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data)=>{
      setImages(data.hits);
      setTimeout(()=>{
        setIsLoading(false);
      },1000)
    })
    .catch((err)=>console.log(err))
  },[search])
  return (
     <div className="place-items-center container mx-auto px-[20px]  pt-[100px] sm:pl-[90px]  pb-[100px] ">
      {!isLoading && images.length===0 &&<h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1> }
      {

   isLoading?<h3 className="text-3xl text-center mx-auto mt-32 text-white">Loading...</h3>:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:auto-rows-fr gap-4 ">
        {images.map(image=>(
          <VideoCard key={image.id} image={image} path={pathname}/>
        ))}
      </div>
      }
     </div>
  )
}

export default Container