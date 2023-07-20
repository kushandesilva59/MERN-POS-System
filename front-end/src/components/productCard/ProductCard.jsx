import React from 'react'
import data from '../../DATA/data'

export const ProductCard = (props) => {

    
    return (
        <div className="box">
            <img src={props.img} alt="picture" />
            <h3>{props.title}</h3>
            <div className="content">
                <span>$ {props.price}</span>
                <a href="#">Add to cart</a>
            </div>
        </div>
    )
}
