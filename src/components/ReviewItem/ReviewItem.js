import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
   
    const {name, quantity, price, key, img} = props.product;
    
    
    return (
        <div className='review-item'>
           <div className="img">
            <img src={img} alt="" />
           </div>
           <div className="details">
           <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>

            <button className='add-to-cart-btn'
            onClick={ () => props.removeReviewItem(key)}
            >Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;