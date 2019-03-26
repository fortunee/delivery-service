import axios from 'axios';

import { FETCH_BIKERS_SUCCESS, FETCH_BIKERS_ERROR } from './type';
import { SERVER_URL } from '../../contants';

export const fetchBikers = () => {
    return (dispatch) => {
        axios.get(`${SERVER_URL}/bikers`)
            .then(response => {
                dispatch({
                    type: FETCH_BIKERS_SUCCESS,
                    bikers: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_BIKERS_ERROR,
                    error
                })
            });
    }
}
