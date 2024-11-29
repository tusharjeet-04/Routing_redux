import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navigation'>
    <NavLink className='home-nav' to='/'>Home</NavLink>
    <NavLink className='home-nav' to='/Student'>Student</NavLink>
    <NavLink className='home-nav' to='/Contact'>Contact Us</NavLink>
    </nav>
    </>
  )
}

export default Navbar