import React from 'react'
import './About.css'
import profile from '../../Assests/theOffice.jpg'
import planetaAzul from '../../Assests/planetaAzul.png'
import planetaNaranja from '../../Assests/planeaNaranja.png'
import rocket from '../../Assests/rocket.png'
import darkSpaceBg from '../../Assests/darkSpaceBg.jpg'

export default function About() {
  return (
      <div className='about'>
        <img src={darkSpaceBg} alt="about_bg" className="about_bg" />
        <div className="about_info">
            <span className="about_text">
                <h1 className="about_title">Get To Know Me</h1>
                <p className="about_subtitle">
                    I am a FrontEnd Developer, soon to be FullStack, passionate about creating my own projects and learning new technologies.
                    <br/>
                    <br/>
                    I started learning Web Development by myself for a few months, until I decided to join HENRY's bootcamp, where I expanded my knowledge and my love for coding.
                    <br/>
                    <br/>
                    I look forward to a job where I can learn and improve my skills, while achieving company goals.
                </p>
            </span>
            <img src={profile} alt='about_img' className="about_img" />
        </div>
        <img src={planetaAzul} alt="about_planet1" className="about_planet1" />
        <div className="about_decoration">
            <div className="about_response">
                <img src={planetaNaranja} alt="about_planet2" className="about_planet2" />
                <img src={rocket} alt="about_rocket" className="about_rocket" />
            </div>
        </div>
    </div>
  )
}
