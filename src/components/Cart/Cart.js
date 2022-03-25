import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const { cart } = props;
    let Total = 0;
    let Shipping = 0; 
 
 
    for (const product of cart){
        // console.log(product.name);       
        Total =Total +  product.price;
        Shipping = Shipping + product.shipping;
    }
    const tax =parseFloat( (Total*0.1).toFixed(2));
    const grandTotal = Total+ Shipping+ tax;
    return (
        <div className='Cart-container'>
            <h1>Order Summary</h1>
              <p>Selected item: {cart.length}</p>
              <p>Total Price: $ {Total}</p>
              <p>Total Shipping: $ {Shipping}</p>
              <p>Tax: $ {tax}</p>
              <h5>Grand Total: $ {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;