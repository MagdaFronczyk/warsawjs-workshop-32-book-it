import React from 'react';
import { connect } from 'react-redux';
import { removeBooked } from '../../store/actions/index';
import PropTypes from 'prop-types';

const Cart = (props) => {
    const { booked, removeBooked } = props;
    return (
        <div>
            <ul>
                {booked.map(hotel => (
                    <li key={hotel.id}>
                        <h3>{hotel.title}</h3>
                        <button onClick={() => removeBooked(hotel.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    booked: state.hotels.booked
});

const mapDispatchToProps = dispatch => ({
    removeBooked: (id) => dispatch(removeBooked(id))
})

const CartRedux = connect(mapStateToProps, mapDispatchToProps)(Cart)

Cart.propTypes = {
    booked: PropTypes.array,
    removeBooked: PropTypes.func
}

export { CartRedux as Cart }