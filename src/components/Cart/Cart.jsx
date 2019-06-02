import React from 'react';
import { connect } from 'react-redux';
import { removeBooked } from '../../store/actions/index';

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

export { CartRedux as Cart }