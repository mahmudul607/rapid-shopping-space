import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import thankYou from '../../images/thank-you-thanks.gif';
import { Col, Container, Row } from 'react-bootstrap';


const Review = () => {


  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const removeReviewItem = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
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

  return (
    <Container fluid>
      <Row>
        <Col lg={9}>
          <div className="product-container">
            <h1>Cart items: {cart.length}</h1>
            {
              cart.map(pd => <ReviewItem
                key={pd.key} product={pd}
                removeReviewItem={removeReviewItem}
              />)
            }
            {
              thankyou
            }
          </div>
        </Col>
        <Col><div className="cart-container">
          <Cart cart={cart}>
            <button id="review-btn" onClick={placeOrder}>Pleace Order</button>
          </Cart>
        </div></Col>

      </Row>
    </Container>

  );
};

export default Review;