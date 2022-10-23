import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {  
    return (
        <div className='header-container'>
                <ul>
                    <li><NavLink end activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink end  activeClassName="active" to="/order">Order</NavLink></li>
                    <li><NavLink end  activeClassName="active" to="/register">Register</NavLink></li>
                    
                </ul>
        </div>
    );
};

export default Header;