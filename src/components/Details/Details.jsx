import React from 'react';

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

export { Details };