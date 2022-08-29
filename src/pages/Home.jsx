import React from 'react'
import HomeContainer from '../components/HomeContainer'
import Navbar from '../components/Navbar'
import {Routes,Route} from "react-router-dom"

function Home() {

  return (
    <div>
      <HomeContainer search="entertain"/>
    </div>
  )
}

export default Home