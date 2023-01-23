import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity, price} = props.product;

    return (
        <div className='review-item'>
            <h4>{name}</h4>
            <p>{quantity}</p>
            <p>${price}</p>

            <button className='add-to-cart-btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;