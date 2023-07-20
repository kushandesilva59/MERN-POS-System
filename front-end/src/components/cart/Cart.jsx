import React from 'react'
import { useCart } from 'react-use-cart'
import { Products } from '../products/Products';

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

    if (isEmpty) return <h1>Your cart is empty</h1>

    return (
        <section>
            <div>
                <div>
                    <h5>Cart {totalUniqueItems} total Items : {totalItems}</h5>
                    <table>
                        <tbody>
                            {items.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={product.img} alt="" style={{ height: '6rem' }} />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>Quantity ({product.quantity})</td>

                                        <td>
                                            <button
                                                onClick={() => updateItemQuantity(product.id, product.quantity - 1)

                                                }>-</button>
                                            <button onClick={() => updateItemQuantity(product.id, product.quantity + 1)

                                            }>+</button>
                                            <button onClick={()=>removeItem(product.id)}>Remove Item</button>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2>Total Price : $ {cartTotal}</h2>
                </div>

                <div>
                    <button onClick={()=>emptyCart()}>Clear Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>

    )
}
