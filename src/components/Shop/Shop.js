
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
console.log(cart);
    const handelAddToCart = (product) =>{
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key!== product.key);
            newCart =[...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        
        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='reuseable-container'>
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