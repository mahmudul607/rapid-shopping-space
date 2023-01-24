import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity, price, key} = props.product;

    return (
        <div className='review-item'>
            <h4>{name}</h4>
            <p>{quantity}</p>
            <p>${price}</p>

            <button className='add-to-cart-btn'
            onClick={ () => props.removeReviewItem(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;