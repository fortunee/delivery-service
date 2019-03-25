import axios from 'axios';

import {
    FETCH_SHIPMENT_SUCCESS,
    FETCH_SHIPMENT_ERROR,
    UPDATE_SHIPMENT_SUCCESS,
    UPDATE_SHIPMENT_ERROR,
} from './type';
import { SERVER_URL } from '../../contants';

export const fetchAllShipment = () => {
    return (dispatch) => {
        axios.get(`${SERVER_URL}/shipment`)
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

export const updateShipment = shipment =>  {
    return (dispatch) => {
        axios.patch(`${SERVER_URL}/shipment/${shipment.id}`, shipment)
            .then(() => {
                dispatch({
                    type: UPDATE_SHIPMENT_SUCCESS,
                    shipment: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: UPDATE_SHIPMENT_ERROR,
                    error
                })
            });
    }
}
