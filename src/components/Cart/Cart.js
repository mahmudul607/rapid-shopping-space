import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    const qq = cart.reduce((qq, q) => qq + q.quantity, 0);
    const formateNumber = pd => {
        const precision = pd.toFixed(2);
        return Number(precision);
    };
    // Adding Class for fixed possition


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
        <div id="add" className='Cart-Section'>
            
            <div className='cart-top'>
                <h2>Cart Summary</h2>
                <h3>Cart Items: {cart.length}</h3>
            </div>
            <div className='cart-amount-section'>
                <h6>Product Price: <span className='amount'>${formateNumber(total)}</span></h6>
                <h6>Quantity: <span className='amount'>{qq}</span></h6>
                <h6>Shipping Cost: <span className='amount'>${formateNumber(shipping)}</span></h6>
                <h5>Tax & VAT: <span className='amount'>${formateNumber(TaxVAT)}</span></h5>
                <h4 id='special-offer'>Special Discount: <span className='amount'>${formateNumber(specialDiscount)}</span></h4>
                <h4 id='g-total'>Total Amount: <span className='amount'>${formateNumber(grandTotal)}</span></h4>
            </div>
            <div  className='review-btn'>
                {
                    props.children
                }
            </div>


            
        </div>

    );
};

export default Cart;