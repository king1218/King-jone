import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then (res => res.json())
        .then(data => setproducts(data))
    }, [])
    const handleAddToCart =(product)=>{
        const newCart = [...cart,setCart];
        setCart(newCart);
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