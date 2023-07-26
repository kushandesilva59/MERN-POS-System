import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2'



export const ProductCard = (props) => {

    const { addItem } = useCart();
    const [item, addTocart] = useState("");




    return (
        <div className="box">
            <img src={props.img} alt="picture" />
            <h3>{props.title}</h3>
            <div className="content">
                <span>$ {props.price}</span>
                <button onClick={() => {
                    Swal.fire({
                        title: `Do you want add ${props.title} to cart ?`,
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: `Oops! No`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Added!', '', 'success')
                            addItem(props.product)
                        } else if (result.isDenied) {
                            Swal.fire('Okay!', '', 'info')
                        }
                    })
                }} >Add to cart</button>

            </div>
        </div>
    )
}




// ()=>addItem(props.product)