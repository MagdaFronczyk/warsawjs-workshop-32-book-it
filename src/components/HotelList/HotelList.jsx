import React, { Component } from 'react';
import { Hotel } from '../Hotel/Hotel';
import { connect } from 'react-redux';
import { getData } from 'store/actions';
import { SearchBar } from '../SearchBar/SearchBar';
import { Details } from '../Details/Details';
import { Link } from "react-router-dom";

class HotelList extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { hotelsList } = this.props;

    return (
      <div>
        <SearchBar />
        <div>{hotelsList.map((el) => (
          <div>
            <Hotel key={el.id} {...el} />
            <Link to={`/${el.id}`} component={Details}>
              Details
         </Link>
          </div>
        ))}</div>
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

export { HotelListRedux as HotelList };