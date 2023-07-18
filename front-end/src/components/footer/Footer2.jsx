import React from 'react'
import styles from '../footer/footer2.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaMapPin} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

export const Footer2 = () => {
  return (
    <section className="footer">
        <div className="footer-box">
            <h2>Coffee Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ullam minima, assumenda 
                maxime natus dolorum repudiandae nemo! Fugit qui ullam minus libero illo labore aliquam, repellendus velit facere delectus!</p>
           
            <div className="social">
                <a href="#"><FaFacebookF/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaGithub/></a>
            </div>
        </div>

        <div className="footer-box">
            <h3>Support </h3>
            <li><a href="#">Products</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Term Of Use</a></li>
            <li><a href="#">Product</a></li>
        </div>

        <div className="footer-box">
            <h3>View Guides </h3>
            <li><a href="#">Features</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog Posts</a></li>
            <li><a href="#">Our Branches</a></li>
        </div>

        <div className="footer-box">
            <h3>Contact</h3>
            <div className="contact">
                <span><FaMapPin className='span'/>250 New York City,USA 1001</span>
                <span><FaPhoneAlt className='span'/>+1 444 7444 8444</span>
                <span><FaEnvelope className='span'/>coffee@show.com</span>
            </div>
        </div>
    </section>
  )
}
