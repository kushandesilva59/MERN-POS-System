import React from 'react'
import styles from '../header/header2.css'
import logo from '../../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import js from '../header/header.js'


export const Header2 = () => {

    return (

        <div className='header'>
            <a href="#" className='logo'>
                <img src={logo} alt="logo" />
            </a>


            <i className='bx bx-menu' id='menu-icon'></i>

            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About Us</a></li>
                {/* <li><a href="products">Products</a></li> */}
                <li><a href="#customers">Customers</a></li>
            </ul>

            <div className="header-icon">
                <a href="login"><AiOutlineShoppingCart className='bx bx-cart-alt' /></a>

                {/* <i href="login"></i> */}
                <i id='search-icon'><AiOutlineSearch className='bx bx-search' /></i>

            </div>

            <div className="search-box">
                <input type="search" name='search' id='search' placeholder='Search here' />
            </div>
        </div>
    )
}
