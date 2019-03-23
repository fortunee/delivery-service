const initialState = {};

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SHIPMENT_SUCCESS':
        return { ...state, shipment: action.shipment };

      case 'FETCH_SHIPMENT_ERROR':
        return { ...state, error: action.error }

      case 'UPDATE_SHIPMENT':
        console.log(action.shipment);

      default:
        return state;
    }
}

export default shipmentReducer;
