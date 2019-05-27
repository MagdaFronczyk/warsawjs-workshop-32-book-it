import {
    combineReducers
} from 'redux';
import {
    hotels
} from './reducers/hotels.reducer';

import {
    input
} from './reducers/searchTerm.reducer';

const rootReducer = combineReducers({
    hotels,
    input
});

export default rootReducer;