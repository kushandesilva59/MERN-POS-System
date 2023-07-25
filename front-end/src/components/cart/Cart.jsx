import React from 'react'
import { useCart } from 'react-use-cart'
import { Products } from '../products/Products';
import styles from '../cart/cart.css'
import axios from 'axios';

export const Cart = () => {

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


        // Example of creating a new order with details as an array of objects
        const order = {
            "orderId": '1',
            "customerId": '2',
            "date": '2023-07-25',
            "amount": cartTotal,
            "details": details
        }

        // console.log(items)

        axios.post("http://localhost:8000/order/saveOrder", order)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.message)
            });


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
