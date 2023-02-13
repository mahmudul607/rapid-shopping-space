import React from 'react';

const ModalContent = (props) => {
    const product = props.modal;
    console.log(product);

    const { name, img, seller, price, stock, key, category } = product;
    return (
        <div>
            <img src={img} alt={name} />
            <h6>Product Category: {category}</h6>
            
        </div>
    );
};

export default ModalContent;