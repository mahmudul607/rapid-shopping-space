import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ModalConten.css'

const ModalContent = (props) => {
    const product = props.modal;
    console.log(product);

    const { name, img, seller, price, stock, key, category, quantity } = product;
    console.log(quantity)
    return (
        <div className='modal-content-body'>
            <div className='modal-content-img'>
                <img src={img} alt={name} />


            </div>
            <div className='modal-content-info'>
                <h4>Product Category:<span> {category}</span> </h4>
                <h5>Only <span>{stock}</span> left in stock--order soon</h5>
                <p><span>Details: </span>{name}</p>
                <h6>Price: <span> {price}</span>
                </h6>
                <h5>Quantity: {quantity}</h5>

                <div className='modal-cart-btn'>
                    {props.showAddToCart === true && (
                        <div
                            className='add-to-cart-btn'
                            onClick={() => props.handelAddToCart(props.modal)}
                        >
                            <p><FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</p>
                        </div>
                    )}
                </div>


            </div>




        </div>
    );
};

export default ModalContent;