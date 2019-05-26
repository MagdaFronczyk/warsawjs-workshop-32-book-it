import '@babel/polyfill';
import {
    Api
} from './Api';
import {
    API_URL
} from 'consts';

export const api = new Api(API_URL);