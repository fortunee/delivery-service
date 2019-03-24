import {
  FETCH_SHIPMENT_SUCCESS,
  FETCH_SHIPMENT_ERROR, 
  FETCH_SINGLE_SHIPMENT_SUCCESS,
  FETCH_SINGLE_SHIPMENT_ERROR,
  UPDATE_SHIPMENT_SUCCESS,
  UPDATE_SHIPMENT_ERROR
} from "../actions/type";

const initialState = {
  shipments: [],
  singleShipment: {}
};

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SHIPMENT_SUCCESS:
        return { ...state, shipments: action.shipment };

      case FETCH_SHIPMENT_ERROR:
        return { ...state, error: action.error }

      case FETCH_SINGLE_SHIPMENT_SUCCESS:
        return { ...state, singleShipment: action.shipment }

      case FETCH_SINGLE_SHIPMENT_ERROR:
        return { ...state, error: action.error }

      case UPDATE_SHIPMENT_SUCCESS:
        return state

      case UPDATE_SHIPMENT_ERROR:
        return { ...state, error: action.error }

      default:
        return state;
    }
}

export default shipmentReducer;
