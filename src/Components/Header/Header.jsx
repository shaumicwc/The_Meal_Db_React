import React from 'react';
import logo from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="" herf="/shop">Shop</a>
                <a href="" herf="/order">Order</a>
                <a href="" herf="/inventory">Inventory</a>
                <a href="" herf="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;