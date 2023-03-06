import React, {  useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
// import thankYou from '../../images/thank-you-thanks.gif';
import {Container, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';







const Review = (props) => {
const [cart, setCart] = useState([]);

  // const [orderPlaced, setOrderPlaced] = useState(false);
  let navigate = useNavigate();
 

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
  

  const placeCheckOut = () => {

  
    navigate("/shipment")
   
    
  
  }
  // let thankyou;
  // if (orderPlaced) {
  //   thankyou = <img src={thankYou} alt="thankyou" />

  // }
  const footerRef = useRef(null);

  useEffect(() => {
    const cartDesk = document.getElementById('card-desk1');
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        if (footerTop > window.innerHeight) {
          cartDesk.classList.add('sticky-top-cart');
        } else {
          cartDesk.classList.remove('sticky-top-cart');
          cartDesk.style.top = `${footerTop - cartDesk.offsetHeight}px`;
        }
      } else {
        cartDesk.classList.remove('sticky-top-cart');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [footerRef]);

  return (
    <Container fluid>
      <Row className='review-product area'>
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
              // thankyou
            }
          </div>
        </div>
        <div id='card-desk1'   className='cart-desk'><div className="cart-container">
          <Cart cart={cart}>
            <button id="review-btn" onClick={placeCheckOut} style={{position:'relative', zIndex:'500'}}>CheckOut</button>
            <button className="review-btn cart-to-shop" type="" style={{ position:'relative', zIndex:'500'}}><Link to="/Shop" >Choose More</Link></button>
          </Cart>
        </div></div>
       
      </Row>
      
    <div>
      <Footer style={{position:'relative'}}></Footer>
    </div>
     
    </Container>

  );
};

export default Review;