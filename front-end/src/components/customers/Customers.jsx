import React from 'react'
import styles from '../customers/customers.css'
import { FaStar } from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
import rev1 from '../../images/rev1.jpg'
import rev2 from '../../images/rev2.jpg'
import rev3 from '../../images/rev3.jpg'

export const Customers = () => {
    return (
        <div className="customers" id="customers">
            <div className="heading">
                <h2>Our customer's</h2>
            </div>

            <div className="customers-container">
                <div className="box">
                    <div className="stars">
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStarHalfAlt /></i>
                    </div>

                    <p>Absolutely love this cafe! customer friendly service and a very uniquely designed cafe.
                        It was a very chill vibe once you get it even though it is very close to the main road.Ideal fro working since its peaceful and quiet.
                         I've added some snaps of the interior of the cafe, over all good customer satisfaction.</p>
                         <h2>Yasin Arafat</h2>
                         <img src={rev1} alt="picture" />
                </div>

                <div className="box">
                    <div className="stars">
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStarHalfAlt /></i>
                    </div>

                    <p>One of my favourite coffe shop and it has nice ambience. Foods are really delicious and 
                        staff is very friendly. Service is superb. Price rangle is also reasonable.</p>
                         <h2>Yasin Arafat</h2>
                  <img src={rev2} alt="picture" />
                </div>

                <div className="box">
                    <div className="stars">
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStar /></i>
                        <i className='bx'><FaStarHalfAlt /></i>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam neque officia quisquam iure voluptate ipsam placeat,
                         dicta asperiores! Quae, excepturi id! Culpa, officiis consequatur. Vitae similique deserunt molestiae necessitatibus.</p>
                         <h2>Yasin Arafat</h2>
                         <img src={rev3} alt="picture" />
                </div>
            </div>
        </div>
    )
}
