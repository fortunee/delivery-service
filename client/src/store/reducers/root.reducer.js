import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import shipmentReducer from './shipment.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    shipment: shipmentReducer
});

export default rootReducer;
