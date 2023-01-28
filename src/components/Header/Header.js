import React, { useEffect, useState } from 'react';
import logo from '../../images/favi.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
const Header = () => {
    const [cart, setCart] = useState({})
    useEffect(() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        console.log(productKeys);

          const cartProducts = productKeys.map(key =>{
              const product = fakeData.find(pd => pd.key === key);
              product.quantity = saveCart[key];
              return product;

          }) ;
          setCart(cartProducts);
},[]);
    return (
        <div className='header'>
            <img src={logo} alt="" title="Rapid Shopping Space" />
            <nav>
                <a href="../Shop">Shop</a>
                <a href="../Review">Order Review</a>
                <a href="/Manage">Manage Inventory</a>
                <a href="../About">About Us</a>
                <Link to="/Review"><button><span>{cart.length}</span>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     </button></Link>
                
            </nav>

        </div>
    );
};

export default Header;