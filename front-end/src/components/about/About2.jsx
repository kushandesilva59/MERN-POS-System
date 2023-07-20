import React from 'react'
import aboutImg from '../../images/about.jpg'
import styles from '../about/about2.css'


export const About2 = () => {
  return (
    <section className='about' id='about'>
      <div className="about-img">
        <img src={aboutImg} alt="image" />
      </div>

      <div className="about-text">
        <h2>Our history</h2>
        <p>Sri lankan coffee has gained popularity over the last couple of years, with varieties earning international awards for
          taste and quality. This highlights great achievement in production quality of our local farmers.</p>

        <p>Most of our coffee beans are sourced locally. This is how proud and confident we are of the flavour profiles unique 
          to our culture, geography and heritage.</p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis,
          ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis,
          ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>

        <a href="#" className='btn'>Learn More</a>
      </div>


    </section>
  )
}

