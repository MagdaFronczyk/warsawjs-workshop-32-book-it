import React, { Component } from 'react';
import { Location } from '../Location/Location';
import { connect } from 'react-redux';
import { getData } from 'store/actions';
import { SearchBar } from '../SearchBar/SearchBar';
import { Details } from '../Details/Details';
import { Link } from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { hotelsList } = this.props;

    return (
      <div>
        <SearchBar />
        <div>{hotelsList.map((el) => (
          <Link to={`/${el.id}`} component={Details}>
            <Location key={el.id} {...el} />
          </Link>
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


const HomeRedux = connect(mapStateToProps, mapDispatchToProps)(Home);

export { HomeRedux as Home }