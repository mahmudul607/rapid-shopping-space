import React from 'react';
import logo from '../../images/favi.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import CircleCart from '../CircleCart/CircleCart';

const Header = (props) => {

  const {cart} = props;
 

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
    
        <CircleCart cart={cart}></CircleCart>
    <div className="user-area">
      <div className="user"></div>
      <div className="user-icon"><FaUserCircle/></div>
    </div>




        </>
    );
};

export default Header;