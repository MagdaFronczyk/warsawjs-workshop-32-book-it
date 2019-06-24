import {
    api
} from 'services';

import {
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
    GET_INPUT,
    GET_BOOKED,
    REMOVE_BOOKED,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../constants/actionTypes';

export const getData = () => {
    return dispatch => api.getData()
        .then(data => dispatch({
            type: GET_DATA_SUCCESS,
            payload: data.list,
        }))
        .catch(e => dispatch({
            type: GET_DATA_ERROR,
            payload: e
        }))
}

export const getInput = (input) => dispatch => dispatch({
    type: GET_INPUT,
    payload: input
});

export const getBooked = (id) => dispatch => dispatch({
    type: GET_BOOKED,
    payload: id
});

export const removeBooked = (id) => dispatch => dispatch({
    type: REMOVE_BOOKED,
    payload: id
});

export const addComment = (comment) => dispatch => dispatch({
    type: ADD_COMMENT,
    payload: comment
});

export const removeComment = (id) => dispatch => dispatch({
    type: REMOVE_COMMENT,
    payload: id
});