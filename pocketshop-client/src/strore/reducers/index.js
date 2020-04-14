import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import vendorReducer from './vendorReducer';
import productReducer from "./productReducer";

export default combineReducers({
    user: userReducer,
    vendor: vendorReducer,
    products: productReducer,
}); 
