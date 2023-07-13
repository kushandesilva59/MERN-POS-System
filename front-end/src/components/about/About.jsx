import React from 'react'
import about from '../about/about.css'
import img1 from '../../images/fried-rice-with-minced-pork-tomato-carrot-cucumber-plate.jpg'

export const About = () => {
  return (
    <div className='about'>
     <div className="main">
     <img src={img1} alt="pic" />

<div class="about-text">
  <h2>DINE AT THE CHEF'S TABLE</h2>
  <p>We invite you to a Michelin-grade dining experience in an unforgettable location.

 and introduces their own unique menu, offering you bites and delights you can't find anywhere else.</p>

<p>Our chefs come from the world's finest eateries, including Eleven Madison Park, Per Se, Atomix, and Blanca. Each chef designs, executes,</p>

<p>We look forward to hosting you!</p>
</div>
     </div>
         
    </div>
  )
}
