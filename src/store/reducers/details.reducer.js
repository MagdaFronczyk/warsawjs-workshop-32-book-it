import {
    GET_DETAILS
} from '../actions/index';

const initialState = {
    foundById: [],
};

export const foundById = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                ...state, foundById: action.payload
            };
        default:
            return state;
    }
}