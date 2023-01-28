import React, { useEffect, useState } from 'react';
import logo from '../../images/favi.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    const [cart, setCart] = useState({})
    useEffect(() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        console.log(productKeys);

          const cartProducts = productKeys.map(key =>{
              const product = fakeData.find(pd => pd.key === key);
              product.quantity = saveCart[key];
              return product;

          }) ;
          setCart(cartProducts);
},[]);
   

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" title="Rapid Shopping Space" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../Shop">Shop</Nav.Link>
            <Nav.Link href="../Review">Order Review</Nav.Link>
            <Nav.Link href="/Manage">Manage Inventory</Nav.Link>
            <Nav.Link href="../About">About Us</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div className='cart-top-icon'> 
        <Link to="/Review"><button><span>{cart.length}</span>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     </button></Link>
        </div>
    




        </>
    );
};

export default Header;