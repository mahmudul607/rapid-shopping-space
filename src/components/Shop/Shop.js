
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handelAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product 
                            showAddToCart={true}
                            product={product}
                            handelAddToCart = {handelAddToCart}
                            key={product.key}
                            
                            >
                            </Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;