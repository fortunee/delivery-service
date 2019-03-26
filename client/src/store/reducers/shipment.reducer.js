import {
  FETCH_SHIPMENT_SUCCESS,
  FETCH_SHIPMENT_ERROR,
  UPDATE_SHIPMENT_SUCCESS,
  UPDATE_SHIPMENT_ERROR
} from "../actions/type";

const initialState = {
  shipments: [],
};

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SHIPMENT_SUCCESS:
        return { ...state, shipments: action.shipment };

      case FETCH_SHIPMENT_ERROR:
        return { ...state, error: action.error }

      case UPDATE_SHIPMENT_SUCCESS:
        const shipments = state.shipments.map(shipment => {
          if (shipment.id == action.shipment.id) {
            return action.shipment
          }
          return shipment
        })
        return { ...state, shipments };

      case UPDATE_SHIPMENT_ERROR:
        return { ...state, error: action.error }

      default:
        return state;
    }
}

export default shipmentReducer;
