import React from 'react'
import styles from '../main/main.css'

export const Main = () => {
    return (
        <div id='main'>
            <div class="cards">
                <div class="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customers</span>
                    </div>
                    <div>
                        <span class="fa fa-users"></span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>79</h1>
                        <span>Rentals</span>
                    </div>
                    <div>
                        <span class="fa fa-users"></span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>124</h1>
                        <span>Available Drivers</span>
                    </div>
                    <div>
                        <span class="fa fa-user-check"></span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>Rs.15,000.00</h1>
                        <span>Income</span>
                    </div>
                    <div>
                        <span class="fa fa-users"></span>
                    </div>
                </div>
            </div>

            <div class="available-grid">
                <div class="cars">
                    <div class="card">
                        <div class="card-header">
                            <h2>Available Cars</h2>

                            <button type="button">See all <span class="fa fa-arrow-right"></span></button>
                        </div>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="carsTable" width="100%">
                                    <thead>
                                        <tr>
                                            <td>Project title</td>
                                            <td>Deparm</td>
                                            <td>status</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>UI/UX </td>
                                            <td>kmasdjka </td>
                                            <td>
                                                <span class="status purple"></span>review </td>
                                        </tr>

                                        <tr>
                                            <td>Software </td>
                                            <td>Panding </td>
                                            <td>
                                                <span class="status pink"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Web </td>
                                            <td>cross-origin </td>
                                            <td>
                                                <span class="status orange"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Css </td>
                                            <td>Normal </td>
                                            <td>
                                                <span class="status"></span>out of progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>UI/UX </td>
                                            <td>kmasdjka </td>
                                            <td>
                                                <span class="status purple"></span>review </td>
                                        </tr>

                                        <tr>
                                            <td>Software </td>
                                            <td>Panding </td>
                                            <td>
                                                <span class="status pink"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Web </td>
                                            <td>cross-origin </td>
                                            <td>
                                                <span class="status orange"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Css </td>
                                            <td>Normal </td>
                                            <td>
                                                <span class="status"></span>out of progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>UI/UX </td>
                                            <td>kmasdjka </td>
                                            <td>
                                                <span class="status purple"></span>review </td>
                                        </tr>

                                        <tr>
                                            <td>Software </td>
                                            <td>Panding </td>
                                            <td>
                                                <span class="status pink"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Web </td>
                                            <td>cross-origin </td>
                                            <td>
                                                <span class="status orange"></span>in progress
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Css </td>
                                            <td>Normal </td>
                                            <td>
                                                <span class="status"></span>out of progress
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="customers">
                    <div class="card-header">
                        <h3>New Customer</h3>

                        <button>See all <span class="fa fa-arrow-right"></span></button>
                    </div>

                    <div class="card-body">
                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact2">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>



                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>

                        <div class="customer">
                            <div class="info">
                                {/* <img src="asserts/image/user.JPG" width="40px" height="40px" alt=""> */}

                                    <div>
                                        <h4>Kasun de silva</h4>
                                        <small>CEO Expert</small>
                                    </div>
                            </div>

                            <div class="contact">
                                <span class="fa fa-user-circle"></span>
                                <span class="fa fa-comment"></span>
                                <span class="fa fa-phone"></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
