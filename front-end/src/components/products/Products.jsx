import React from 'react'
import styles from '../products/products.css'
import pic1 from '../../images/p1.png'
import pic2 from '../../images/p2.png'
import pic3 from '../../images/p3.png'
import pic4 from '../../images/p4.png'
import pic5 from '../../images/p5.png'
import pic6 from '../../images/p6.png'

import data from '../../DATA/data'
import { ProductCard } from '../productCard/ProductCard'

export const Products = () => {
    return (
        <section className='products' id='products'>
            <div className="heading">
                <h2>Our popular products</h2>
            </div>

            <div className="products-container">
    
                {data.productData.map((product, index) => {
                    return (
                    
                        <ProductCard img={product.img} title={product.title} desc={product.desc} price={product.price} key={index}/>
                    )
                })}




            </div>
        </section>
    )
}
