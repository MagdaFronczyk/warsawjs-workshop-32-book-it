import {
    ADD_COMMENT
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
        default:
            return state
    }
}