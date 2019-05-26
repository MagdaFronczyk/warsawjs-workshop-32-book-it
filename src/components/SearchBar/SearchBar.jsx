import React, { useState, useEffect } from 'react';
import { getInput } from '../../store/actions/index';
import { connect } from 'react-redux';

const SearchBar = (props) => {
    const { value, onGetInput } = props;
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        onGetInput(searchString)
    }, [searchString])

    return (
        <div>
            <label htmlFor="">
                Search address
                <input type="text" value={value} onChange={(event) => setSearchString(event.target.value)} />
            </label>
        </div>
    )
}

const mapStateToProps = state => ({
    value: state.input.value
});

const mapDispatchToProps = dispatch => ({
    onGetInput: (searchString) => dispatch(getInput(searchString))
})

const SearchRedux = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export { SearchRedux as SearchBar }