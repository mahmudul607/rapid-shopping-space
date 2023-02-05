import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const BottomFixedCart = (props) => {
  const {cart} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const qq = cart.reduce((qq, q) => qq + q.quantity, 0);

  const CartIconStyle = {
    zIndex:'110', 
    bottom:0, 
    position:'absolute', 
    background:'red', 
    textAlign:'center',
    right:'10%',
    paddingBottom:0,
    padding: '1%'
  }
  const CartIconStyle1 = {
    zIndex:'110', 
    bottom:0, 
    position:'absolute', 
    background:'green', 
    textAlign:'center',
    right:'10%',
    height:'50px',
    width:'50px',
    paddingBottom:0,
    borderRadius:'50%',
    border:'5px solid goldenRod'
  }
  const CartIconStyle2 = {
    zIndex:'110', 
    bottom:0, 
    position:'absolute', 
    background:'lightGray', 
    textAlign:'center',
    right:'23%',
    height:'35px',
    width:'35px',
    paddingBottom:0,
    borderRadius:'50%',
    borderRadius:'50% 50% 0 50%',
    top:20,
    color:'red',
    fontSize:'25px',
    padding: '1%',
    paddingTop: '1%'
    
  }
  const reviewStyle = {
    width: '50%',
    zIndex: '110',
    position: 'absolute',
    textAlign: 'center',
    marginTop: '-30px',
    right: '100px',
    padding:'1%',
    border: '1px solid yellow',
    borderRadius: '5%',
    background: 'goldenrod',
    color: 'black',
  }

  return (
    <div style={{ position: "fixed", bottom: "10%", width: "300px" , right:0, zIndex:100}}>
      {isExpanded && (
        <div style={{height:'250px', width:'300px', padding:'5%', paddingTop:'10%'}}>
          <Cart cart={cart}></Cart>
        </div>
      )}
      <div onClick={() => setIsExpanded(!isExpanded)} style={{paddingBottom:0, paddingTop:'32%'}}>
      {isExpanded ? <div> <Link to="/Review"><button style={reviewStyle}>Review your Order</button></Link><button style={CartIconStyle}>Close</button> </div>
      : <span><h1 style={CartIconStyle2}>{qq}</h1>
        <button style={CartIconStyle1}>
        <FontAwesomeIcon icon={faShoppingCart} />
    </button></span>
      }
      
        
        
        
      </div>
    </div>
  );
};

export default BottomFixedCart;

