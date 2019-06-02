import {
    GET_INPUT
} from '../constants/actionTypes';

const initialState = {
    value: ""
};

export const input = (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUT:
            return {
                ...state, value: action.payload
            };
        default:
            return state;
    }
}