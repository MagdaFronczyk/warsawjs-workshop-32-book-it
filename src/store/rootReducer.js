import {
    combineReducers
} from 'redux';
import {
    hotels
} from './reducers/hotels.reducer';
import {
    foundById
} from './reducers/details.reducer';

import {
    input
} from './reducers/searchTerm.reducer';

const rootReducer = combineReducers({
    hotels,
    input,
    foundById
});

export default rootReducer;