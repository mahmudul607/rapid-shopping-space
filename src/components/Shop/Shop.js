
import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Shop = () => {


    const first10 = fakeData.slice(0, 20);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = saveCart[exitingKey];
            return product;
        })
        setCart(previousCart);
    }, [])

    const handelAddToCart = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);

        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);

    }
    return (
       
            <Container fluid>
                <Row>
                    <Col lg={9}><div >
                        <ul>
                            {
                                products.map(product => <Product
                                    showAddToCart={true}
                                    product={product}
                                    handelAddToCart={handelAddToCart}
                                    key={product.key}

                                >
                                </Product>)
                            }
                        </ul>
                    </div></Col>
                    <Col lg={3}>
                        <div className='cart-section'>
                             <Cart cart={cart}>
                                <Link to="/Review"><button id='review-btn'>Review your Order</button></Link>
                            </Cart>
                        </div>
                            
                        
                    </Col>
                </Row>

            </Container>

        







    );
};

export default Shop;