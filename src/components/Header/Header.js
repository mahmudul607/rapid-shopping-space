import React, {useState } from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../images/favi.png';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUserCircle } from "react-icons/fa";
import CircleCart from '../CircleCart/CircleCart';


const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userName, setUserName] = useState('Login');
  const [userData, setUserData] = useState([]);

  const { cart } = props;
  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  }


  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const username = userData.username;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      if (username === email && userData.password === password) {
        setUserName(username);
        setShowLogin(false);
      } else {
        console.error("Incorrect email or password");
        alert("Incorrect email or password")
      }
    }
  };
  

  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    if (username && email && password && password === confirmPassword) {
      const userData = { username, email, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData(userData);
      setShowLogin(true);
      setShowSignup(false);
    }
  };
  

  return (
    <>
      {showLogin && (
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
      )}
      {showSignup && (
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
      )}
      <Navbar key={'md'}  expand={'md'} className="mb-3" >
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} alt="" title="Rapid Shopping Space" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
           <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'md'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
            placement="end"
            backdrop={true}
            scroll={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
              <img src={logo} alt="" title="Rapid Shopping Space" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
               <div className='nav-items'>
               <Nav.Link href="../Shop">Shop</Nav.Link>
                <Nav.Link href="../Review">Order Review</Nav.Link>
                <Nav.Link href="/Manage">Manage Inventory</Nav.Link>
                <Nav.Link href="../About">About Us</Nav.Link>
               </div>
                <div className="user-area">
                <div className="user" onClick={toggleLogin}>{userName}</div>
                <div className="user-icon" onClick={toggleLogin}><FaUserCircle /></div>
              </div>
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <CircleCart cart={cart}></CircleCart>
    </>
  );
}

export default Header;
         
