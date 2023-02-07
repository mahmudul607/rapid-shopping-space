import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from '../Chart/Chart';
import './About.css';
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaPhone, FaRegHeart } from "react-icons/fa";
import Footer from '../Footer/Footer';



const About = () => {
    return (
        <Container fluid>
            <Row className='about-body'>
                <Col className='about-text' lg={6}>
                    <div className="circle">
                        <h1>Your Needs <br /><span>is</span><br /> Our Target</h1>
                        <div className="love">
                            <a href="../Shop"><FaRegHeart className='heart-icon' />R.S.S</a>
                        </div>
                    </div>
                    <div className='text-heart'>
                    <h4>Do You know Why We best for You?</h4>
                    <ul>
                        <li>Authentic Seller Only We Allow Here</li>
                        <li>Ensure Your Exact Needs</li>
                        <li>Quick Delivery</li>
                        <li>Quick Response For Your Return Products</li>
                    </ul>
                        
                    </div>
                    
                </Col>
                <Col className='Chart-section' lg={6}><Chart></Chart></Col>
            </Row>
            <Row>
                <Col className='contact-text'>Keep In Touch</Col>
                <Col className='contact-method'>
                    <ul className='dropdown'>
                        <li className='connect-with-us-li'><button>Connect With us</button>
                            <ul className='dropdown-content'>
                                <li><a href="/"><FaFacebook /></a></li>
                                <li><a href="/"><FaLinkedinIn /></a></li>
                                <li><a href="/"><FaEnvelope /></a></li>
                                <li><a href="/" title='01797692607'><FaPhone /></a></li>
                            </ul>
                        </li>

                    </ul>
                </Col>
            </Row>
            
            <Row className='footer' >
                <Footer></Footer>
            </Row>
        </Container>


    );
};

export default About;