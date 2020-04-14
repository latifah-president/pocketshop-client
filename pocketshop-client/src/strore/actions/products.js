import {productTypes} from "./actionTypes";
import axios from './../../axiosinstance';

export const getVendorProducts = (vendor_name) => dispatch => {
    dispatch ({
        type: productTypes.FETCH_PRODUCTS_START
    })
    if (vendor_name) {
        axios.get(`/product/${vendor_name}`)
            .then(res => {
                console.log("vendor products res data", res.data)
                if (res.status === 404) {
                    dispatch({
                        type: productTypes.FETCH_PRODUCTS_FAIL,
                        payload: res.data.errorMessage
                    })
                } else {
                    dispatch({
                        type: productTypes.FETCH_PRODUCTS_SUCCESS,
                        payload: res.data
                    })
                }
                })
                .catch (err => {
                    dispatch({
                        type: productTypes.FETCH_PRODUCTS_FAIL,
                        payload: err
                    })
                })
    } else {
        dispatch ({
            type: productTypes.FETCH_PRODUCTS_FAIL,
            payload: "No Vendor Found"
        })
    }
};

export default {
    getVendorProducts,
}