import React from 'react'
import styles from "../header/header-styles.css"
import {Form} from "../form/Form"
import logo from '../../images/Resident_Logo.png'


export const Header = () => {
  return (
    <div className='header'>
        <nav className='nav-list'>
            {/* <a href="" className='logo'>POS System</a> */}

            <img src={logo} alt="logo" className="logo" />

            <ul className='list'>
                <li>Home</li>
                <li>Items</li>
                <button className='loginBtn'>Login</button>
            </ul>
        </nav>
    </div>
  )
}

