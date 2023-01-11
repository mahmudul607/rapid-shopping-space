import React from 'react';
import '../../fakeData';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4  className='product-name'>{name}</h4>
                <br/>
                <p>By: {seller}</p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock, Order soon</small></p>
                <button 
                        className='add-to-cart-btn'
                        onClick={() => props.handelAddToCart(props.product)}
                        >
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     Add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;