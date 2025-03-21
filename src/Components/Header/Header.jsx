import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
