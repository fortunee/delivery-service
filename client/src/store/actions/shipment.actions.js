export const fetchSingleShipment = id => {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        return dispatch({
            type: 'FETCH_SINGLE_SHIPMENT',
            singleShipment: getState().shipment.shipments.find(item => item.id == id)
        })
    }
}

export const updateShipment = shipment =>  {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        dispatch({ type: 'UPDATE_SHIPMENT', shipment })
    }
}