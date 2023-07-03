import React from 'react'
import logo from '../assets/images/uenrlogo.png'

export const Navbar = () => {
  return (
    <div className='container-fluid'>
        <div className='logo'>
        <img src={logo} alt="logo" width={40} height={40}  />
        </div>
        <div className='nav-links'>
            <nav>
            </nav>
        </div>
        <div className='search-btn'>
            <div className='search-input'>
                <input type='text' placeholder='search...'></input>
                <button className='btn btn-primary'>Search</button>
            </div>
        </div>
    </div>
  )
}
