
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import './Shop.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import ManageBar from '../ManageBar/ManageBar';





const Shop = (props) => {

//Electronics Products
    const first10 = fakeData.slice(0, 21);
    

    const [products] = useState(first10);
    const {cart, setCart} = props;

    // useEffect(() => {
    //     const saveCart = getDatabaseCart();
    //     const productKeys = Object.keys(saveCart);
    //     const previousCart = productKeys.map(exitingKey => {
    //         const product = fakeData.find(pd => pd.key === exitingKey);
    //         product.quantity = saveCart[exitingKey];
    //         return product;
    //     })
    //     setCart(previousCart);
       
    // }, []);
    

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
        addToDatabaseCart(product.key, count);

    }
    //Electronics Products


    return (
       
            <Container fluid>

                <Row><ManageBar></ManageBar></Row>
                <Row className='show-row'>
                <Col className='reuseable-cart' lg={2} md={3}>
                        <div className='cart-section'>
                            <h3>Categories</h3>

                             {/* <Cart cart={cart}>
                                <Link to="/Review"><button id='review-btn'>Review your Order</button></Link>
                            </Cart> */}
                        </div>
                            
                        
                    </Col>
                    <Col className='product-card' lg={10} md={10}>
                        <div >
                        <ul>
                            {
                                products.map(product => <Product
                                    showAddToCart={true}
                                    cart={cart}
                                    product={product}
                                    handelAddToCart={handelAddToCart}
                                    key={product.key}

                                >
                                </Product>)
                            }
                        </ul>
                    </div>
                    </Col>
                    
                </Row>
                <Footer></Footer>

            </Container>

        







    );
};

export default Shop;