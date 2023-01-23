import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {

  
    const [cart, setCart] = useState([]);
    useEffect(() => {
              // cart
              const saveCart = getDatabaseCart();
              const productKeys = Object.keys(saveCart);
               

                const cartProducts = productKeys.map(key =>{
                    const product = fakeData.find(pd => pd.key === key);
                    product.quantity = saveCart[key];
                    return product;

                }) ;
                setCart(cartProducts);

                

    },[]);
    
    return (
        <div>
            <h1>Review Your Order: {cart.length}</h1>
           {
            cart.map(pd => <ReviewItem key={pd.key} product={pd} />)
           }
        </div>
    );
};

export default Review;