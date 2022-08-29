import React from 'react'
import {Route,Routes,BrowserRouter,Link} from "react-router-dom"
import SideBar from './components/SideBar'
import VideoPlayerHome from './components/VideoPlayerHome'
import Education from './pages/Education'
import Entertainment from './pages/Entertainment'
import Home from './pages/Home'
import News from './pages/News'
import Footer from './components/Footer'
function App() {
  return (
    <div>
        <BrowserRouter>
        <SideBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<VideoPlayerHome/>}/>
            <Route path='/education/*' element={<Education/>}/>
            <Route path='/entertain/*' element={<Entertainment/>}/>
            <Route path='/news/*' element={<News/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
   </div>
  )
}

export default App