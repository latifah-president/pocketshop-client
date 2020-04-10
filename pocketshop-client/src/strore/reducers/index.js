import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import vendorReducer from './vendorReducer';

export default combineReducers({
    user: userReducer,
    vendor: vendorReducer
}); 
