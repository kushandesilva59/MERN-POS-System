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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis, 
                ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis, 
                ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>

               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis, 
                ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>

                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus distinctio quod architecto nihil ex quis, 
                ratione incidunt ea deleniti labore soluta similique quae veritatis earum quam, cupiditate voluptates asperiores?</p>

                <a href="#" className='btn'>Learn More</a> 
        </div>


    </section>
  )
}

