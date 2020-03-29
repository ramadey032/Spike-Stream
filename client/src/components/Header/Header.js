import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import './Header.css';

const Header = () => {
    return (
        <div className="todo-header">
            <div className="logo-box logo-animated">
                <Link to="/">
                    <img src="/assets/todo-logo.png" alt="logo" className="todo-logo" />
                </Link>
            </div>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <div className="login-button">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default Header;