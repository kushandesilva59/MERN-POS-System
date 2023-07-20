import React from 'react'
import {useCart} from 'react-use-cart'


export const ProductCard = (props) => {
    const { addItem } = useCart();
    
    return (
        <div className="box">
            <img src={props.img} alt="picture" />
            <h3>{props.title}</h3>
            <div className="content">
                <span>$ {props.price}</span>
                <button onClick={()=>addItem(props.product)}>Add to cart</button>
            </div>
        </div>
    )
}
