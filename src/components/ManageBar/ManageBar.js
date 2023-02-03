
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';




const ManageBar = () => {
    






    return (
        <Container fluid>
            <Row>
                <Col lg={4}>
                    
                    <input type="submit" name="category" value="category" placeholder='search'></input>
                </Col>
                <Col lg={4}>Price Range</Col>
                <Col lg={4}></Col>
            </Row>
        </Container>
    );
};

export default ManageBar;