import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import thankYou from '../../images/thank-you-thanks.gif';
import {Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Review = (props) => {
const [cart, setCart] = useState([]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const removeReviewItem = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  const handelQuantityLess = (product) => {
    const sameProduct = cart.find(pd => pd.key === product.key);
    const pQuantity = sameProduct.quantity;
    let count = 1;
    let newCart;
    if (sameProduct) {
     
      if (pQuantity > 1){
        count = sameProduct.quantity - 1;
      }
      else{
        count = 1;
      }
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== product.key);
      newCart = [...others, sameProduct];
      
    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];
        
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  }
  

  useEffect(() => {
    // cart
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = saveCart[key];
      return product;

    });
    setCart(cartProducts);
  }, []);

  const placeOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    clearLocalShoppingCart();
  }
  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={thankYou} alt="thankyou" />

  }
  useEffect(() => {
    const cartDesk = document.getElementById('card-desk1');
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        cartDesk.classList.add('sticky-top-cart');
      } else {
        cartDesk.classList.remove('sticky-top-cart');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <div className='cart-item-desk'>
          <div className="product-container">
            <h1>Cart items: {cart.length}</h1>
            {
              cart.map(pd => <ReviewItem
                key={pd.key} product={pd}
                handelAddToCart={props.handelAddToCart}
                handelQuantityLess={handelQuantityLess}
                removeReviewItem={removeReviewItem}
              />)
            }
            {
              thankyou
            }
          </div>
        </div>
        <div id='card-desk1'   className='cart-desk'><div className="cart-container">
          <Cart cart={cart}>
            <button id="review-btn" onClick={placeOrder} style={{position:'fixed', zIndex:'2000'}}>Place Order</button>
            <button className="review-btn cart-to-shop" type="" style={{position:'fixed', zIndex:'1000'}}><Link to="/Shop" >Choose More</Link></button>
          </Cart>
        </div></div>

      </Row>
    </Container>

  );
};

export default Review;