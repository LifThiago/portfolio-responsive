import React from 'react'
import './Home.css'
import darkSpaceBg from '../../Assests/darkSpaceBg.jpg'
import astronaut2 from '../../Assests/astronaut2.png'
import { FaRocket } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='home'>
        <img className='home_bg' src={darkSpaceBg} alt='home_bg'/>
        <div className="home_container">

        <div className="home_text">
            <h1 className="home_titles">A Universe</h1>
            <h1 className="home_titles">Of Possibilites</h1>
            <button className="home_button">
                Let's Explore <FaRocket className='home_rocket'/>
            </button>
        </div>

        <img src={astronaut2} alt="home_astronaut" className="home_astronaut" />

        </div>
    </div>
  )
}
