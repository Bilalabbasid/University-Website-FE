import React from 'react'
import './Hero.css'

import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container' >
            <div className="hero-text">
                <h1>Innovating the Future, Shaping Leaders</h1>
                <p> NovaTech University is a cutting-edge institution dedicated to empowering the next generation of innovators, leaders, and thinkers. </p>
           <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>

        </div>
    )
}

export default Hero
