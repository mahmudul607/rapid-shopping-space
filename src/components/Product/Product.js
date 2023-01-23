import React from 'react';
import '../../fakeData';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4  className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock, Order soon</small></p>
               {props.showAddToCart === true && <button 
                        className='add-to-cart-btn'
                        onClick={() => props.handelAddToCart(props.product)}
                        >
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     Add to Cart</button>}
            </div>
            
            
        </div>
    );
};

export default Product;