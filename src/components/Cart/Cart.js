import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total =  cart.reduce((total, prd) => total+prd.price, 0);
    const formateNumber = pd =>{
            const precision=pd.toFixed(2);
            return Number(precision);
    };

   let shipping = 0;
   if(total > 50){
    shipping = 0;
   }
   else if(total > 20){
        shipping = 4.99;
   }
   else if(total > 0){
    shipping = 12.99;
   }
const TaxVAT = total/10;
const grandTotal = total + shipping;

    return (
        <div className='Cart-Section'>
            <div className='cart-top'>
                <h2>Order Summary</h2>
                <h3>Items Ordered: {props.cart.length}</h3>
            </div>
            <h4>Product Price: {formateNumber(total)}</h4>
            <h4>Shipping Cost: {shipping}</h4>
            <h4>Tax & VAT: {formateNumber(TaxVAT)}</h4>
            <h3>Total Amount: {formateNumber(grandTotal)}</h3>

        </div>
    );
};

export default Cart;