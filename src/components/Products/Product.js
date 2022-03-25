import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    const {name, seller, ratings, img, price} = props.product;
    return (
        <div className='product'>
        <img src={img} alt="" />
       <div className='product-info'> 
       <p className='product-name'>Name: {name}</p>
        <p>Price:$ {price }</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Rating: {ratings}</small></p>
       </div>
       <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
           <p className='btn-text'>Add to cart</p>

           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
       </button>
        </div>
    );
};

export default Product;