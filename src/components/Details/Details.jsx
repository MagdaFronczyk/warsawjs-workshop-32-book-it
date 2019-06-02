import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBooked, addComment } from 'store/actions';

const Details = (props) => {

    const { data, match, comments, getBooked, addComment } = props;
    const [comment, setComment] = useState("");
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
            <button onClick={() => getBooked(match.params.id)}>Book</button>
            <div>
                <h3>Add a comment</h3>
                <textarea value={comment} onChange={() => setComment(event.target.value)} cols="30" rows="10"></textarea>
                <button onClick={() => { addComment(comment); setComment('') }}>Add</button>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    data: state.hotels.data,
    comments: state.comments.list
});

const mapDispatchToProps = dispatch => ({
    getBooked: (id) => dispatch(getBooked(id)),
    addComment: (comment) => dispatch(addComment(comment))
});

const DetailsRedux = connect(mapStateToProps, mapDispatchToProps)(Details);

export { DetailsRedux as Details } 