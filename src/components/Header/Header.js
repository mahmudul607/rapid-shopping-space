import React from 'react';
import logo from '../../images/favi.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" title="Rapid Shopping Space" />
            <nav>
                <a href="../Shop">Shop</a>
                <a href="../Cart">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <span className='search-section'>
                    <input type="text" />
                    <button type="submit">Search</button>
                </span>
            </nav>

        </div>
    );
};

export default Header;