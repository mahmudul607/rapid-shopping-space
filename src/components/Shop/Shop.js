import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import ManageBar from '../ManageBar/ManageBar';
import { CategoryContext } from '../../App';
import Carousel from '../Carousel/Carousel';

const Shop = (props) => {
    const [category, setCategory] = useContext(CategoryContext);

    const { cart, handelAddToCart } = props;
   
    const [showProductModal, setShowProductModal] = useState(false);



    //Electronics Products
    const first10 = fakeData.slice(0, 31);
    const [products, setProducts] = useState(first10);




    useEffect(() => {

        const matchProducts = first10.filter(pd => pd.category === category.toLowerCase())
        if (matchProducts.length > 0) {
            setProducts(matchProducts)
        }
        else {
            setProducts(first10)
        }

    }, [category, first10]);



    //Electronics Products


    return (

        <Container fluid>
            <Row><Carousel></Carousel></Row>
            <Row><ManageBar></ManageBar></Row>
            <Row className='show-row'>
                <Col className='reuseable-cart' lg={1} md={1} style={{ paddingTop: '20px' }}>
                    <div className='cart-section'>
                        <div className='category-form'>
                            <h4>Category:</h4>
                            <ul className='form-items'>
                                <li for="html" onClick={() => setCategory('All')}>All</li>
                                <li for="css" onClick={() => setCategory('Laptop')}>Laptop</li>
                                <li for="javascript" onClick={() => setCategory('Android')}>Mobile</li>
                                <li for="camera" onClick={() => setCategory('Camera')}>Camera</li>
                                <li for="watch" onClick={() => setCategory('watch')}>Watch</li>
                            </ul>

                        </div>
                        {/* <Cart cart={cart}>
                                <Link to="/Review"><button id='review-btn'>Review your Order</button></Link>
                            </Cart> */}
                    </div>
                  


                </Col>
                <Col className='product-card' lg={10} md={10}>
                    <div>
                    
                       
                   

                        <ul className='product-ul'>
                            {
                                products.map(product => <Product
                                    showAddToCart={true}
                                    cart={cart}
                                    product={product}
                                    showProductModal={showProductModal}
                                    setShowProductModal={setShowProductModal}
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