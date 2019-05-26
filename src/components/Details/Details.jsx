import { connect } from 'react-redux';
import React from 'react';
import { hotels } from '../../store/reducers/hotels.reducer';

const Details = (props) => {
    const filteredById = props.data.find(el => el.id === props.match.params.id)
    console.log(filteredById);
    return (
        <div>
            <img src={filteredById.cover.url} alt="" />
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.hotels.data
});


const DetailsRedux = connect(mapStateToProps, null)(Details);

export { DetailsRedux as Details }