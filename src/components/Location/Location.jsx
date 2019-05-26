import React, { Component } from 'react';

export class Location extends Component {

    render() {
        const { address, centre } = this.props.location;
        return (
            <div>
                <p>Location</p>
                <p>Address: {address}</p>
                <p>Centre: {centre}</p>
            </div>
        )
    }
}