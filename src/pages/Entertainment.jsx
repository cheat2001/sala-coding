import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import {Routes,Route} from "react-router-dom"
import { HiHome } from "react-icons/hi";
import VideoPlayer from '../components/VideoPlayer';
function Entertainment() {
  return (
    <div>
         <Navbar navBarObj={[{id:1,title:"Movies",link:"movies"},{id:2,title:"Series",link:"series"},{id:3,title:"TV Show",link:"tvshow"}]} />
         <Routes>
           <Route path="" element={<Container search="entertain"/>} />
           <Route path="/:id" element={<VideoPlayer/>} />
           <Route path="movies" element={<Container search="animation"/>} />
           <Route path="movies/:id" element={<VideoPlayer/>} />
           <Route path="series" element={<Container search="series movies"/>} />
           <Route path="series/:id" element={<VideoPlayer/>} />
           <Route path="tvshow" element={<Container search="tv show"/>} />
           <Route path="tvshow/:id" element={<VideoPlayer/>} />

        </Routes>
    </div>
  )
}

export default Entertainment