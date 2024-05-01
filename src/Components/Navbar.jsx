import React from 'react'
import bgi from '../assets/imh.png'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className='p-4 fixed res mt-11 flex items-center lg:ml-116px bg-opacity-20 justify-around w-screen'>
          <a href="/" className="text-white font-orbitron text-xl">Antariksh</a>
          <ul className='flex relative w-[60%] justify-evenly'>
            <li><a href="/" className="text-white hover:border-b-2 ease-linear duration-500 border-white font-orbitron font-semibold tracking-wider text-5xl ml-2">Home</a></li>
            <li><a href="#about" className="text-white hover:border-b-2 ease-linear duration-500 font-orbitron ml-2">About</a></li>
            <li><a href="#learn" className="text-white hover:border-b-2 ease-linear duration-500 font-orbitron ml-2">Learn</a></li>
            <li><a href="#community" className="text-white hover:border-b-2 ease-linear duration-500 font-orbitron ml-2">Community</a></li>
          </ul>
        </nav>
  )
}

export default Navbar
