import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import {addToDb } from '../../utilities/fakedb';
import {getStoredCart} from '../../utilities/fakedb'; 

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then (res => res.json())
        .then(data => setproducts(data))
    }, [])

    useEffect(() => {
     const ShoppingCart = getStoredCart();
     console.log(ShoppingCart);
    },[])   
     const handleAddToCart =(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);

    }
    return (
        <div className='Shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id}
                        product ={product}
                        handleAddToCart = {handleAddToCart}>
                   
                    </Product>)
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;