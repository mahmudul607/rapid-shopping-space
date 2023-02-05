
import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import ManageBar from '../ManageBar/ManageBar';
import { CategoryContext} from '../../App';






const Shop = (props) => {

    const {cart, handelAddToCart} = props;

   

//Electronics Products
    const first10 = fakeData.slice(0, 31);
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState(first10);
  

   

    useEffect(() => {
      
            const matchProducts = first10.filter(pd => pd.category === category.toLowerCase())
            if(matchProducts.length > 0) {
                setProducts(matchProducts)
            }
            else {
                setProducts(first10)
            }

    }, [category]);
    

    
    //Electronics Products


    return (
       
            <Container fluid>

                <Row><ManageBar></ManageBar></Row>
                <Row className='show-row'>
                <Col className='reuseable-cart' lg={1} md={1} style={{paddingTop:'20px'}}>
                        <div className='cart-section'>
                            <h3>Brands:</h3>
                            <ul style={{flexDirection:'column'}}>
                                <h4><a href="/">Nokia</a> </h4>
                                
                                <h4><a href="/">Dell</a> </h4>
                                
                                <h4><a href="/">Lenovo</a> </h4>
                                
                                <h4><a href="/">Canon</a> </h4>
                            </ul>
                            
                             {/* <Cart cart={cart}>
                                <Link to="/Review"><button id='review-btn'>Review your Order</button></Link>
                            </Cart> */}
                        </div>
                            
                        
                    </Col>
                    <Col className='product-card' lg={10} md={10}>
                        <div key={products.key}>
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