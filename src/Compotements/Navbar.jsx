
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex bg-black py-4 font-bold justify-around text-slate-200'>
      <Link to = "/">Navbar</Link>
      <ul className='flex justify-center items-center gap-20'>
        <li> <Link to = "/about">About us </Link></li>
        <li> <Link to = "/contact">Contact us  </Link></li>
        <li> <Link to = "/home">Serviice </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
