import React from 'react'
import {Route,Routes,BrowserRouter,Link} from "react-router-dom"
import SideBar from './components/SideBar'
import VideoPlayer from './components/VideoPlayer'
import Education from './pages/Education'
import Entertainment from './pages/Entertainment'
import Home from './pages/Home'
import News from './pages/News'
function App() {
  return (
    <div>
        <BrowserRouter>
        <SideBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<VideoPlayer/>}/>
            <Route path='/education/*' element={<Education/>}/>
            <Route path='/entertain/*' element={<Entertainment/>}/>
            <Route path='/news/*' element={<News/>}/>
          </Routes>
        </BrowserRouter>
   </div>
  )
}

export default App