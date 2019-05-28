import React, { Component } from 'react';
import { Hotel } from '../Hotel/Hotel';
import { connect } from 'react-redux';
import { getData } from 'store/actions';
import { SearchBar } from '../SearchBar/SearchBar';
import PropTypes from 'prop-types';

class HotelList extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { hotelsList } = this.props;

    return (
      <div>
        <SearchBar />
        {hotelsList.map((el, index) => (
          <div key={index}>
            <Hotel key={el.id} {...el} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hotelsList: state.hotels.filtered
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

const HotelListRedux = connect(mapStateToProps, mapDispatchToProps)(HotelList);

HotelList.propTypes = {
  hotelsList: PropTypes.array,
  getData: PropTypes.func
}

export { HotelListRedux as HotelList };