import {
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../constants/actionTypes';

const initialState = {
    list: []
}

export const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state, list: [...state.list, action.payload]
            };
        case REMOVE_COMMENT:
            return {
                ...state, list: state.list.filter((comment, index) => index !== action.payload)
            };
        default:
            return state
    }
};