import React from 'react'
import styles from '../products/products.css'
import pic1 from '../../images/p1.png'
import pic2 from '../../images/p2.png'
import pic3 from '../../images/p3.png'
import pic4 from '../../images/p4.png'
import pic5 from '../../images/p5.png'
import pic6 from '../../images/p6.png'

export const Products = () => {
  return (
    <section className='products' id='products'>
        <div className="heading">
            <h2>Our popular products</h2>
        </div>

        <div className="products-container">
            <div className="box">
                <img src={pic1} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>

            <div className="box">
                <img src={pic2} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>

            <div className="box">
                <img src={pic3} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>

            <div className="box">
                <img src={pic4} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>

            <div className="box">
                <img src={pic5} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>

            <div className="box">
                <img src={pic6} alt="picture" />
                <h3>Americano Pure</h3>
                <div className="content">
                    <span>$25</span>
                    <a href="#">Add to cart</a>
                </div>
            </div>


        </div>
    </section>
  )
}
