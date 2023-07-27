import React from 'react'
import { useCart } from 'react-use-cart'
import { Products } from '../products/Products';
import styles from '../cart/cart.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Payment } from '../payment/Payment';
import Swal from 'sweetalert2';


export const Cart = () => {

    const [order, setOrder] = "";



    const navigate = useNavigate();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();



    if (isEmpty) return <h1></h1>

    const saveOrder = () => {

        Swal.fire({
            title: `Do you want to confirm order ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Oops! No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Order success!', '', 'success')
                const details = [];

                for (const item of items) {
                    console.log(item.id)

                    const detail = {
                        "itemName": item.title,
                        "quantity": item.quantity,
                        "price": item.itemTotal
                    }

                    details.push(detail);
                }

                axios.get('http://localhost:8000/order/lastOrder')
                    .then(response => {
                        let orderId = response.data[0].orderId;
                        const newOrderId = ++orderId;
                        console.log(`new order id ${newOrderId}`)

                        // Example of creating a new order with details as an array of objects
                        const order = {
                            orderId: newOrderId,
                            customerId: '2',
                            date: '2023-07-25',
                            amount: cartTotal,
                            details: details
                        }




                        axios.post("http://localhost:8000/order/saveOrder", order)
                            .then(response => {
                                console.log("saved order");
                                emptyCart();

                            }).catch(error => {
                                console.log(error)
                            });


                        // console.log(response.data[0].orderId)
                    }).catch(error => {
                        console.log("Error ", error)
                    });

            } else if (result.isDenied) {
                Swal.fire('Order Unsuccess!', '', 'info')
            }
        })





    }


    return (
        <section className='cart'>
            <div>
                <h2 className='title'>Cart</h2>

                <div className='top-cart'>
                    {/* <h5>Cart {totalUniqueItems} total Items : {totalItems}</h5> */}
                    <table >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>- Quantity</th>
                                <th>+ Quantity</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((product, index) => {


                                return (


                                    <tr key={index} style={{ "Border-bottom": "4px solid black" }}>
                                        <td>
                                            <img src={product.img} alt="" style={{ height: '6rem', width: 'auto' }} />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>$ {product.price}</td>
                                        <td> {product.quantity}</td>

                                        <td>
                                            <button className='minusBtn'
                                                onClick={() => updateItemQuantity(product.id, product.quantity - 1)

                                                }>-</button>


                                        </td>

                                        <td><button className='plussBtn' onClick={() => updateItemQuantity(product.id, product.quantity + 1)

                                        }>+</button></td>

                                        <td> <button className='removeBtn' onClick={() => removeItem(product.id)}>Remove Item</button></td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>

                <div className='bottom-cart'>
                    <div>
                        <h2>Total Price : $ {cartTotal}</h2>
                    </div>

                    <div>
                        <button className='clearBtn' onClick={() => emptyCart()}>Clear Cart</button>
                        <button className='buyBtn' onClick={saveOrder}>Buy Now</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
