import React from 'react'
import styles from '../home/home.css'
import main from '../../images/main.png'

export const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home-text">
            <h1>Start your day <br /> with coffee</h1>
            <p>Our Coffe SHop is a great place to relax and enjoy a Cup. See what's on the menu today! Silva's choice cafe, is a coffee shop in Colombo.</p>
            <a href="login" className='btn'>Shop Now</a>
        </div>

        <div className="home-img">
            <img src={main} alt="main image" />
        </div>
    </section>
  )
}
