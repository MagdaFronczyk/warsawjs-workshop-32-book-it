import {
    api
} from 'services';

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_INPUT = 'GET_INPUT';
export const GET_BOOKED = 'GET_BOOKED';

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