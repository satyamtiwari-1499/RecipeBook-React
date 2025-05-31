import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navContainer  h-20 bg-black flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-16 text-xl md:text-2xl font-black px-4">
     
        <NavLink to="/" className={({isActive})=>isActive ? "text-white  border-b scale-95 " : "text-gray-600"}>
            Home
        </NavLink>
        <NavLink to="/recipelist" className={({isActive})=>isActive ? "text-white  border-b scale-95 " : "text-gray-600"}>
            Recipe
        </NavLink>
        <NavLink to="/favoriterecipe" className={({isActive})=>isActive ? "text-white  border-b scale-95 " : "text-gray-600"}>
            Favourite
        </NavLink>
        <NavLink to="/about" className={({isActive})=>isActive ? "text-white  border-b scale-95 " : "text-gray-600"}>
            About
        </NavLink>
    </div>
  )
}

export default Navbar
