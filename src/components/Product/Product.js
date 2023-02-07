import React from 'react';
import '../../fakeData';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
    const {name, img, seller, price, stock, key, category} = props.product;
    return (

        
            
    <Card style={{ marginTop:'2rem', marginLeft:'1rem' }}>
      <div className="image">
            <Card.Img className='card-img' variant="top" src={img} />
      </div>
      
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          <small>
          <Link to={"/product/"+key}>{name}</Link>
        </small>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Only {stock} left in stock, Order soon</ListGroup.Item>
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>By: {seller}</ListGroup.Item>
      </ListGroup>
      <Card.Footer>
      {props.showAddToCart === true && <button 
                        className='add-to-cart-btn'
                        onClick={() => props.handelAddToCart(props.product)}
                        >
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     Add to Cart</button>}
        </Card.Footer>
    </Card>

 
        
    );
};

export default Product;