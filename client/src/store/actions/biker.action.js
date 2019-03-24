import axios from 'axios';
import { FETCH_BIKERS_SUCCESS, FETCH_BIKERS_ERROR } from './type';

export const fetchBikers = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/api/v1/bikers')
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