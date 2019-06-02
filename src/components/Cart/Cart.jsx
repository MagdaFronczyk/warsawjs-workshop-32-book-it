import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
    const { booked } = props;
    return (
        <div>
            <ul>
                {booked.map(hotel => (
                    <li key={hotel.id}>{hotel.title}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    booked: state.hotels.booked
});

const CartRedux = connect(mapStateToProps, null)(Cart)

export { CartRedux as Cart }