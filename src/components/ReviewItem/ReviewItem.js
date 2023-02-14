import React from 'react';
import './ReviewItem.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ReviewItem = (props) => {
   
    const {name, quantity, price, key, img} = props.product;


   


    
    
    return (
        <div className='review-item'>
           <div className="img">
            <img src={img} alt="" />
           </div>
           <div className="details">
           <h5>{name}</h5>
            <h4>Quantity:   <ArrowDropDownIcon onClick={ () => props.handelQuantityLess({key})}/>  {quantity}  <ArrowDropUpIcon onClick={() =>props.handelAddToCart(props.product)}/></h4>
            <p>Price: ${price}</p>

            <button className='add-to-cart-btn'
            onClick={ () => props.removeReviewItem(key)}
            >Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;