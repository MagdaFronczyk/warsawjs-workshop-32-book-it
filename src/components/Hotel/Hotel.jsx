import React from 'react';

const Hotel = (props) => {
    const { location, title, cover } = props;
    return (
        <div>
            <p>{title}</p>
            <img src={cover.url} alt="" />
            <p>Location</p>
            <p>Address: {location.address}</p>
            <p>{location.centre} from centre</p>
        </div>
    )
}

export { Hotel };