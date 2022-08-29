import React,{useEffect,useState} from 'react'
import VideoCardHome from './VideoCardHome'
import VideoSearch from "../components/VideoSearch";
function HomeContainer({search}) {
  const pathname = window.location.pathname;
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState([true]);
  const [term,setTerm]=useState('');
 console.log(pathname);
  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    // .then((res) => res.json())
    // .then((data)=>console.log(data))
    // .catch((err)=>console.log(err))

    fetch(`https://pixabay.com/api/?key=29545295-3b1e9fad88fa8a36b80fb5a37&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data)=>{
      setImages(data.hits);
      setTimeout(()=>{
        setIsLoading(false);
      },1000)
    })
    .catch((err)=>console.log(err))
  },[term])
  return (
     <div className="container mx-auto  pt-[50px] pl-[90px] sm:pl[70px] pb-[100px]">
      <VideoSearch searchText={(text)=>setTerm(text)}/>


      {!isLoading && images.length===0 &&<h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1> }
      {

   isLoading?<h3 className="text-3xl text-center mx-auto mt-32 text-[white]">Loading...</h3>:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:auto-rows-fr gap-4 place-content-center">
        {images.map(image=>(
          <VideoCardHome key={image.id} image={image} path={pathname}/>
        ))}
      </div>
      }
     </div>
  )
}

export default HomeContainer