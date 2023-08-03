import React from 'react'
import styles from '../header/header.css'

export const HeaderAdmin = () => {
    return (
        <div className='header-admin'>
            <header id="adminHeader">
                <h2>
                    <label for="nav-toggle">
                        <span class="fa fa-bars"></span>
                    </label>

                    Dashboard
                </h2>

                <div class="search-wrapper">
                    <span class="fa fa-search"></span>
                    <input type="search" placeholder="Search here"/>
                </div>

                <div class="user-wrapper">
                    {/* <img src="asserts/image/user.JPG" width="30px" height="30px" alt=""> */}
                        <div>
                            <h4>Kushan des silva</h4>
                            <small>Super admin</small>
                        </div>
                </div>
            </header>

        </div>
    )
}
