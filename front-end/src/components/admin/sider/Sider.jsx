import React from 'react'
import styles from '../sider/sider.css'
import { AiOutlineLogin } from 'react-icons/ai'

export const Sider = () => {
    return (
        <div class="sidebar">
            <div class="sidebar-brand">
                <h2 id="admin"><span class="fa fa-globe"></span> <span>Admin</span></h2>
            </div>

            <div class="sidebar-menu">
                <ul>
                    <li><a href="" class="active">
                        <span><AiOutlineLogin /></span>
                        <span>Dashboard</span></a>
                    </li>

                    <li><a href="" class="not-active">
                        <span><AiOutlineLogin /></span>
                        <span>Customers</span></a>
                    </li>

                    <li><a href="" class="not-active">
                        <span><AiOutlineLogin /></span>
                        <span>Cars</span></a>
                    </li>

                    <li><a href="" class="not-active">
                        <span><AiOutlineLogin /></span>
                        <span>Drivers</span></a>
                    </li>

                    <li><a href="" class="not-active">
                        <span><AiOutlineLogin /></span>
                        <span>Users</span></a>
                    </li>

                    <li><a href="" class="not-active">
                        <span><AiOutlineLogin /></span>
                        <span>Rentals</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
