import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from '../Chart/Chart';
import './About.css';
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";



const About = () => {
    return (
        <Container>
            <Row className='about-body'>
                <Col className='about-text' lg={6}>
                    <h1>Your Needs <br /><span>is</span><br /> Our Targets</h1>
                </Col>
                <Col className='Chart-section' lg={6}><Chart></Chart></Col>
            </Row>
            <Row>
                <Col className='contact-text'>Keep In Touch</Col>
                <Col className='contact-method'>
                    <ul className='dropdown'>
                        <li>Connect With us
                            <ul className='dropdown-content'>
                                <li><a href="www.facebook.com/cse.md.mahmudul.h"><FaFacebook/></a></li>
                                <li><a href=""><FaLinkedinIn/></a></li>
                                <li><a href=""><FaEnvelope/></a></li>
                                <li><a href="#" title='01797692607'><FaPhone/></a></li>
                            </ul>
                        </li>

                    </ul>
                </Col>
            </Row>

        </Container>


    );
};

export default About;