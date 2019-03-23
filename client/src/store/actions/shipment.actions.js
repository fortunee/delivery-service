import axios from 'axios';

export const fetchShipment = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/api/v1/shipment')
            .then(response => {
                dispatch({
                    type: 'FETCH_SHIPMENT_SUCCESS',
                    shipment: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_SHIPMENT_ERROR',
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
