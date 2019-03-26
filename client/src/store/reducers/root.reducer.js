import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import shipmentReducer from './shipment.reducer';
import bikerReducer from './biker.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    shipment: shipmentReducer,
    bikers: bikerReducer
});

export default rootReducer;
