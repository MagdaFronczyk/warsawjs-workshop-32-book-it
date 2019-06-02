import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export { Menu };