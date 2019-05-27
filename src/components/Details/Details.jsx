import React from 'react';
import { connect } from 'react-redux';

const Details = (props) => {
    const filteredById = props.data.find(el => el.id === props.match.params.id)
    console.log(filteredById, props.data);
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