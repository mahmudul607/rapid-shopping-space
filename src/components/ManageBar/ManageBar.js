
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryContext} from '../../App';
import './ManageBar.css'




const ManageBar = () => {
    const [category, setCategory] = useContext(CategoryContext);






    return (
        <Container fluid>
            <Row>
                <Col lg={4} style={{paddingLeft:'30px'}}>
                    <ul className='category'>
                    <li onClick={() => setCategory('All')}>All</li>
                    <li onClick={() => setCategory('Laptop')}>Laptop</li>
                    <li onClick={() => setCategory('Android')}>Mobile</li>
                    <li onClick={() => setCategory('Camera')}>Camera</li>

                        
                    </ul>
                    
                    
                </Col>
                <Col lg={4}>
                    
                        <h1 style={{textAlign:'center'}}>{category}</h1> 
                    
                    </Col>
                <Col lg={4}> </Col>
            </Row>
        </Container>
    );
};

export default ManageBar;