export const updateShipment = (shipment) =>  {
    return (dispatch, getState) => {
        // Make async call before actual action dispatch below
        dispatch({ type: 'UPDATE_SHIPMENT', shipment })
    }
}