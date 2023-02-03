import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaEnvelope} from "react-icons/fa";
import './Footer.css';
import logo from '../../images/favi.png'
const Footer = () => {
    return (
        
            <Container fluid className='footer-body'>
                <Row className='footer-logo'><img src={logo} alt="" /></Row>
                <Row>
                    <Col lg={4}>
                        <ul><h4>Quick Links</h4>
                            <li><a href="../Shop">Shop</a></li>
                            <li><a href="../Review">Review Your Cart</a></li>
                            <li><a href="../Inventory">Manage Inventory</a></li>
                            <li><a href="../About">About</a></li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <ul><h4>Connect With Us</h4>
                            <li><a href="/"><FaFacebook />  Facebook</a></li>
                            <li><a href="/"><FaLinkedinIn />  LinkedIn</a></li>
                            <li><a href="/"><FaTwitter/>  Twitter</a></li>
                            <li><a href="/"><FaEnvelope/>  Email</a></li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <ul><h4>Rank</h4>
                            <li><a href="/">Rank-1 Seller</a></li>
                            <li><a href="/">Rank-2 Seller</a></li>
                            <li><a href="/">Rank-3 Seller</a></li>
                            <li><a href="/">Rank-4 Seller</a></li>
                        </ul>
                    </Col>
                   
                </Row>
                
            </Container>
        
    );
};

export default Footer;