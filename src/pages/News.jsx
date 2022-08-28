import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import {Routes,Route} from "react-router-dom"
import VideoPlayer from '../components/VideoPlayer';

function News() {
  return (
    <div>
         <Navbar navBarObj={[{id:1,title:"National",link:"national"},{id:2,title:"International",link:"international"},{id:3,title:"Sports",link:"Sports"}]} />
         <Routes>
         <Route path="" element={<Container search="russia"/>} />
         <Route path="/:id" element={<VideoPlayer/>} />
         <Route path="national" element={<Container search="Angkor"/>} />
         <Route path="national/:id" element={<VideoPlayer/>} />
            <Route path="international" element={<Container search="International"/>} />
            <Route path="international/:id" element={<VideoPlayer/>} />
            <Route path="sports" element={<Container search="sports"/>} />
            <Route path="sports/:id" element={<VideoPlayer/>} />
          </Routes>
    </div>
  )
}

export default News