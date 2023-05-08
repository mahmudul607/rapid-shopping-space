import "./Header.css";
import CircleCart from "../CircleCart/CircleCart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/favi-lg.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LoggedInUser } from "../../App";


const Header = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUser)



  const { cart } = props;

  
  useEffect(() => {
    const cartDesk = document.getElementById('nav-scroll');
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        cartDesk.classList.add('sticky-top');
      } else {
        cartDesk.classList.remove('sticky-top');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    
      <Container className='header-body' fluid>
        <div className='header-top'>
          <div className='left-side top-bar'><p>Welcome visitor you can login or create an account.</p></div>
          <div className='right-side top-bar'>
            <ul>
              <li><FaUserCircle style={{color:'black', top:0}} />  </li>
              <li>checkout</li>
              <li><div className="user" >Login</div></li>
            </ul>
          </div>
        </div>
        <div className='second-top-bar'>
          <div className='logo-area'><img src={logo} alt="" title="Rapid Shopping Space" />
          <h5 style={{color:'white', fontWeight:'700', fontStyle:'italic', textShadow:'2px 1px 1px', letterSpacing: '2px'}}>Rapid Shopping Space</h5>
          </div>
          <div className='search-area'>
            <div className='search-category'>
              <ul className="dropdown">
                <li onClick={() => setIsOpen(!isOpen)}>
                  Category
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className='search-input-key'>
            <input className='search-input' type="text" id="fname" name="fname" placeholder='Search'></input>
            </div>
            <div className='search-btn'>
            <h6 type="Search">Search</h6>
            </div>
            
            
          </div>
          <div className='cart-area'>cart</div>

        </div>
        <Navbar id='nav-scroll' key={'md'} expand={'md'} className="" >
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="start"
              backdrop={true}
              scroll={true}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                  <img src={logo} alt="" title="Rapid Shopping Space" />
                  <h3>Rapid Shopping Space</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-2">
                  <div className='nav-items'>
                    <Link to="../home">Home</Link>
                    <Link to="../shop">Shop</Link>
                    <Link to="../review">Order Review</Link>
                    <Link to="/manage">Manage Inventory</Link>
                    <Link to="../about">About Us</Link>
                    <button onClick={()=> setLoggedInUser({})}>Log Out</button>
                  </div>
                </Nav>
                

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <CircleCart cart={cart}></CircleCart>
      </Container>
    </>
  );
}

export default Header;

