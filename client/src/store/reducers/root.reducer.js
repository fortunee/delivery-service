import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import shipmentReducer from './shipment.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    shipments: shipmentReducer
});

export default rootReducer;
