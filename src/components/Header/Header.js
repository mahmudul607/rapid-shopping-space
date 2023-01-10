import React from 'react';
import logo from '../../images/favi.png';
import './Header.css';
const Header = () => {
    return (
            <div className='header'>
                <img src={logo} alt="" title="Rapid Shopping Space" />
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                </nav>
            </div>
    );
};

export default Header;