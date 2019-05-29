import React from 'react';
import { connect } from 'react-redux';

const Details = (props) => {

    const { data, match } = props;

    const hotel = data.find(el => el.id === match.params.id);

    return (
        <div>
            <h2>{hotel.title}</h2>
            <img src={hotel.cover.url} />
            <h3>Demand: {hotel.demand}</h3>
            <div>
                <h3>Location</h3>
                <p>{hotel.location.address}</p>
            </div>
            <div>
                <h3>Price</h3>
                <p>Price: {hotel.price.amount}{hotel.price.currency}</p>
                <p>Breakfast: {hotel.price.breakfast ? 'included' : 'not included'}</p>
            </div>
            <div>
                <h3>Rating</h3>
                <p>Hotel rating average: {hotel.rating.average}</p>
                <p>Total reviews: {hotel.rating.reviews}</p>
            </div>
            <div>
                <h3>Room</h3>
                <p>Room available: {hotel.room}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.hotels.data
});

const DetailsRedux = connect(mapStateToProps, null)(Details);

export { DetailsRedux as Details } 