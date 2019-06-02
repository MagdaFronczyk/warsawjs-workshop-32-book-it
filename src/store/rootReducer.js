import {
    combineReducers
} from 'redux';
import {
    hotels
} from './reducers/hotels.reducer';

import {
    input
} from './reducers/searchTerm.reducer';

import {
    comments
} from './reducers/comments.reducer'

const rootReducer = combineReducers({
    hotels,
    input,
    comments
});

export default rootReducer;