import {
    GET_DATA_SUCCESS,
    GET_INPUT
} from '../actions/index';

const initialState = {
    data: [],
    filtered: []
};

export const hotels = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state, data: action.payload, filtered: action.payload
            };
        case GET_INPUT:
            const filtered = action.payload ? state.data.filter(hotel => hotel.location.address.includes(action.payload)) : state.data;
            return {
                ...state, filtered
            };
        default:
            return state;
    }
}