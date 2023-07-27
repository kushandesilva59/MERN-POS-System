import React from 'react'
import styles from '../home/home.css'
import main from '../../images/main.png'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { Login } from '../loginForm/LoginForm'



export const Home = () => {

  const navigate = useNavigate();

  const showAlert = () => {
    Swal.fire({
      title: `Oops! You need to sign up this website. Do you have an account?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Oops! No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/login');
    
      } else if (result.isDenied) {
        Swal.fire('Okay!', '', 'info')
      }
    })
  }

  return (
    <section className='home' id='home'>
      <div className="home-text">
        <h1>Start your day <br /> with coffee</h1>
        <p>Our Coffe SHop is a great place to relax and enjoy a Cup. See what's on the menu today! Silva's choice cafe, is a coffee shop in Colombo.</p>
        {/* <a href="login" className='btn'>Shop Now</a> */}

        <button className="btn" onClick={showAlert}>Shop Now</button>
      </div>

      <div className="home-img">
        <img src={main} alt="main image" />
      </div>
    </section>
  )
}
