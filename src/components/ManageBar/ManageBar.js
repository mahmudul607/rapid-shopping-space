
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './ManageBar.css'




const ManageBar = () => {
    






    return (
        <Container fluid className='manageBar'>
            <Row>
                <Col lg={4}> 
                </Col>
                <Col lg={4}>
                        <h1 style={{textAlign:'center'}}>{}</h1> 
                    </Col>
                <Col lg={4}> </Col>
            </Row>
        </Container>
    );
};

export default ManageBar;