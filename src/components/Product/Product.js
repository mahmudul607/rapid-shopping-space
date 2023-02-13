import React, { useState } from 'react';
import '../../fakeData';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaSearchPlus, FaWindowClose } from 'react-icons/fa';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const Product = (props) => {
  const product =props.product
  const { name, img, seller, price, stock, key, category, star } = product;
  const [showProductModal, setShowProductModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [likeColor, setLikeColor] = useState('');

  const handelLike = () => {
    
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  };

  const handelModalProduct = (product) => {
    setModalProduct(product);
    setShowProductModal(true);
  };

  const handelModalProductClose = () => {
    setModalProduct(null);
    setShowProductModal(false);
  };

  return (
    <>
      {showProductModal && (
        <div className="product-modal">
          <div className="product-modal-content">
            <div onClick={handelModalProductClose}>
            <FaWindowClose/>
            </div>
            <div className='modal-content-body'>
              <div className='modal-product-img'>
                <img src={modalProduct.img} alt=""></img>
              </div>
              <div className='modal-product-info'>
                <Card.Title>{modalProduct.name}</Card.Title>

              </div>
              
            </div>
          </div>
        </div>
      )}

      <Card className='cart' style={{ marginTop: '2rem', marginLeft: '1rem' }}>
        <div className="image">
          <Card.Img className='card-img' variant="top" src={img} />
          <div className='product-modal-btn-area'>
            <button className='product-details-btn product-hover-btn' title='Click To See' onClick={() => handelModalProduct(product)}>
              <FaSearchPlus />
            </button>
            {props.showAddToCart === true && (
              <button
                className='product-hover-btn'
                onClick={() => props.handelAddToCart(props.product)}
              title='Add to Cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            )}
          </div>
          <div className='product-modal-btn-area2'>
            <button className='product-details-btn product-hover-btn'>
              <FaHeart/>
            </button>
            {props.showAddToCart === true && (
              <button
                className='product-hover-btn'
              >
                <ThumbUpAltIcon onClick={handelLike} color={likeColor} ></ThumbUpAltIcon>
              </button>
            )}
          </div>
        </div>

        <Card.Body style={{borderRadius:'20px', marginTop:'10%'}}>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
            <small>
            <Link style={{textDecoration:'none'}} to={`/product/${key}`}><p>{name}</p></Link>
            </small>
          </Card.Text>
          <ListGroup className="list-group-flush">
          <ListGroup.Item style={{fontWeight:'400', fontSize:'15px'}}>${price}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        {props.showAddToCart === true &&(
              <div
                className='add-to-cart-btn'
                onClick={() => props.handelAddToCart(props.product)}
              >
                  <p><FontAwesomeIcon icon={faShoppingCart}/>  Add to Cart</p> 
              </div>
            )}
        
        

      </Card>




    </>



  );
};

export default Product;