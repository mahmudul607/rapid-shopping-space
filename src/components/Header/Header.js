import "./Header.css";
import CircleCart from "../CircleCart/CircleCart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useEffect, useState } from "react";
import logo from "../../images/favi-lg.png";
import { FaUserCircle } from "react-icons/fa";


const Header = (props) => {
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);
  // const [userName, setUserName] = useState('My Account');
  // const [userData, setUserData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);



  const { cart } = props;
  // const toggleLogin = () => {
  //   setShowLogin(!showLogin);
  //   setShowSignup(false);
  // }


  // const toggleSignup = () => {
  //   setShowSignup(!showSignup);
  //   setShowLogin(false);
  // }


  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const storedUserData = getUserDatabase();
  //   if (storedUserData) {
  //     const userData = JSON.parse(storedUserData);
  //     const username = userData.username;
  //     const email = e.target.elements.email.value;
  //     const password = e.target.elements.password.value;

  //     if (username === email && userData.password === password) {
  //       setUserName(username);
  //       setShowLogin(false);
  //     }
  //     else {
  //       console.error("Incorrect email or password");
  //       alert("Incorrect email or password")
  //     }

  //   }
  //   else {
  //     console.error("Incorrect email or password");
  //     alert("Please SignUp to Login")
  //   }
  // };


  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   const username = e.target.elements.username.value;
  //   const email = e.target.elements.email.value;
  //   const password = e.target.elements.password.value;
  //   const confirmPassword = e.target.elements.confirmPassword.value;
  //   if (username && email && password && password === confirmPassword) {
  //     const userData = { username, email, password };
  //     localStorage.setItem("userData", JSON.stringify(userData));
      
  //     setShowLogin(false);
  //     setShowSignup(false);
  //   }
  //   addToDatabaseUser(username, password, email);

  // };
  
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
      {/* {showLogin && (
        <div className="modal-container">
          <form className="modal-form" onSubmit={handleLogin}>
            <h3>Login</h3>
            <input type="text" id='email' placeholder="Username or Email" required />
            <input type="password" id='password' placeholder="Password" required />
            <div className='log-area'>
              <button type="submit">Login</button>
              <button type="button" onClick={toggleSignup}>Sign Up</button>
              <button type="button" onClick={toggleLogin}>Cancel</button>

            </div>
          </form>
        </div>
      )} */}
      {/* {showSignup && (
        <div className="modal-container">
          <form className="modal-form" onSubmit={handleSignup}>
            <h3>Sign Up</h3>
            <input type="text" id='username' placeholder="Username" required />
            <input type="email" id='email' placeholder="Email" required />
            <input type="password" id='password' placeholder="Password" required />
            <input type="password" id='confirmPassword' placeholder="Confirm Password" required />
            <div className='log-area'>
              <button type="submit">Sign Up</button>
              <button type="button" onClick={toggleSignup}>Cancel</button>
            </div>
          </form>
        </div>
      )} */}
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
                    <Nav.Link href="../home">Home</Nav.Link>
                    <Nav.Link href="../shop">Shop</Nav.Link>
                    <Nav.Link href="../review">Order Review</Nav.Link>
                    <Nav.Link href="/manage">Manage Inventory</Nav.Link>
                    <Nav.Link href="../about">About Us</Nav.Link>
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

