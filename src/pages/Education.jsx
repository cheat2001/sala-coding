import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import {Routes,Route} from "react-router-dom"

import VideoPlayer from '../components/VideoPlayer';

function Education() {
        
  return (
    <div>
         <Navbar navBarObj={[{id:1,title:"Khmer",link:"khmer"},{id:2,title:"English",link:"english"},{id:3,title:"Math",link:"math"}]} />
         <Routes>
         <Route path="" element={<Container search="education"/>} />
         <Route path="/:id" element={<VideoPlayer/>} />

         <Route path="khmer" element={<Container search="khmer"/>} />
         <Route path="khmer/:id" element={<VideoPlayer/>} />
         <Route path="english" element={<Container search="english language"/>} />
         <Route path="english/:id" element={<VideoPlayer/>} />
          <Route path="math" element={<Container search="math"/>} />
          <Route path="math/:id" element={<VideoPlayer/>} />
          </Routes>
    </div>
  )
}

export default Education