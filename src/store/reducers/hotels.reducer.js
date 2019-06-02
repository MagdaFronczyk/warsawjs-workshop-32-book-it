import {
    GET_DATA_SUCCESS,
    GET_INPUT,
    GET_BOOKED,
    REMOVE_BOOKED
} from '../constants/actionTypes';

const initialState = {
    data: [],
    filtered: [],
    booked: []
};

export const hotels = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state, data: action.payload, filtered: action.payload
            };
        case GET_INPUT:
            const filtered = action.payload ? state.data.filter(hotel => hotel.location.address.toUpperCase().includes(action.payload.toUpperCase())) : state.data;
            return {
                ...state, filtered
            };
        case GET_BOOKED:
            return {
                ...state, booked: [...state.booked.filter(el => el.id !== action.payload), ...state.data.filter(hotel => hotel.id === action.payload)]
            };
        case REMOVE_BOOKED:
            return {
                ...state, booked: [...state.booked.filter(hotel => hotel.id !== action.payload)]
            };
        default:
            return state;
    }
};