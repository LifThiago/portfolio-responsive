import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <h1 className="nav_title"><a href='#home' className='nav_title'>Thiago<span className='nav_subtitle'>Lif</span></a></h1>
        <ul className="nav_list">
            <li className="nav_item">
                <a href="#about" className="nav_link">About</a>
            </li>
            <li className="nav_item">
                <a href="#skills" className="nav_link">Skills</a>
            </li>
            <li className="nav_item">
                <a href="#contact" className="nav_link">Contact</a>
            </li>
        </ul>
    </div>
  )
}
