export const fetchShipment = () => {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        return dispatch({
            type: 'FETCH_SHIPMENT',
            shipment
        })
    }
}

export const updateShipment = shipment =>  {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        dispatch({ type: 'UPDATE_SHIPMENT', shipment })
    }
}