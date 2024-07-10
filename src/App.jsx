import React from 'react'
import Navbar from './Compotements/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Compotements/Pages/About'
import Contact from './Compotements/Pages/Contact'
import Home from './Compotements/Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/home' element = {<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
