import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Menu = (props) => {
    const { booked } = props;
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cart">
                    <li>Cart {booked.length === 0 ? null : `(${booked.length})`}</li>
                </Link>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    booked: state.hotels.booked
})

const MenuRedux = connect(mapStateToProps, null)(Menu);

Menu.propTypes = {
    booked: PropTypes.array
}

export { MenuRedux as Menu };