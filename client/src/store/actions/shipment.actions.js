import axios from 'axios';

import {
    FETCH_SHIPMENT_SUCCESS,
    FETCH_SHIPMENT_ERROR,
    FETCH_SINGLE_SHIPMENT_SUCCESS,
    FETCH_SINGLE_SHIPMENT_ERROR
} from './type';

export const fetchAllShipment = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/api/v1/shipment')
            .then(response => {
                dispatch({
                    type: FETCH_SHIPMENT_SUCCESS,
                    shipment: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_SHIPMENT_ERROR,
                    error
                })
            });
    }
}

export const fetchSingleShipment = id => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/v1/shipment/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_SINGLE_SHIPMENT_SUCCESS,
                    shipment: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_SINGLE_SHIPMENT_ERROR,
                    error
                })
            });
    }
}

export const updateShipment = shipment =>  {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        dispatch({ type: 'UPDATE_SHIPMENT', shipment });
    }
}
