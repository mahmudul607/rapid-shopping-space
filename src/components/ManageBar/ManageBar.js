
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryContext} from '../../App';




const ManageBar = () => {
    const [setCategory] = useContext(CategoryContext);






    return (
        <Container fluid>
            <Row>
                <Col lg={4} style={{paddingLeft:'30px'}}>
                    <button onClick={() => setCategory('All')}>All</button>
                    <button onClick={() => setCategory('Laptop')}>Laptop</button>
                    <button onClick={() => setCategory('android')}>Mobile</button>
                    <button onClick={() => setCategory('Camera')}>Camera</button>
                    
                </Col>
                <Col lg={4}>Price Range</Col>
                <Col lg={4}></Col>
            </Row>
        </Container>
    );
};

export default ManageBar;