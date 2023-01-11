import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    const formateNumber = pd => {
        const precision = pd.toFixed(2);
        return Number(precision);
    };

    let shipping = 0;
    if (total > 50) {
        shipping = 0;
    }
    else if (total > 20) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const TaxVAT = total / 10;
    let specialDiscount = 0;
    if (total > 1000) {
        specialDiscount = 35;
    }
    else if (total > 500) {
        specialDiscount = 15;
    }
    else if (total > 0) {
        specialDiscount = 0;
    }
    const grandTotal = total + shipping + TaxVAT - specialDiscount;

    return (
        <div className='Cart-Section'>
            <div className='cart-top'>
                <h2>Order Summary</h2>
                <h3>Items Ordered: {props.cart.length}</h3>
            </div>
            <div className='cart-amount-section'>
                <h4>Product Price: <span className='amount'>${formateNumber(total)}</span></h4>
                <h4>Shipping Cost: <span className='amount'>${formateNumber(shipping)}</span></h4>
                <h4>Tax & VAT: <span className='amount'>${formateNumber(TaxVAT)}</span></h4>
                <h4 id='special-offer'>Special Discount: <span className='amount'>${formateNumber(specialDiscount)}</span></h4>
                <h3 id='g-total'>Total Amount: <span  className='amount'>${formateNumber(grandTotal)}</span></h3>
            </div>
            
            <a href="/review"><button id='review-btn'>Review your Order</button></a>

        </div>
        
    );
};

export default Cart;