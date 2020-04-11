import {authTypes, vendorTypes} from './actionTypes';
import axios from './../../axiosinstance';
 
export const VendorRegistration = (userObj) => (dispatch) => {
    dispatch ({
        type: authTypes.VENDOR_REG_START
    })
    console.log("user from init0auth:", userObj)
    axios.put("/vendor/register", { ...userObj })
    .then(res =>{
    console.log(res.data, 'res.data.users')
    if (res.status === 201) {
        axios.get(`/vendor/${userObj.firebase_id}`)
        .then(res => {
            console.log("user from init0auth 201:", res.data)
            console.log("vendor data", res.data)
            const data = {
                firebase_id: userObj.firebase_id,
                vendor_name: userObj.vendor_name,
                first_name: userObj.first_name,
                last_name: userObj.last_name,
                user_type: userObj.user_type,
                street_address: userObj.street_address,
                city: userObj.city,
                state: userObj.state,
                zip: userObj.zip,
                country: userObj.country,
                phone_number: userObj.phone_number
            }
            dispatch({
                type: authTypes.VENDOR_REG_SUCCESS,
                payload: res.data
            })
        })
       

    } else if (res.status === 404) {
        dispatch({
            type: authTypes.VENDOR_REG_FAIL,
            payload: "Enter all fields"
        })
    }
   }) 
   .catch( err => {
    dispatch({
        type: authTypes.VENDOR_REG_FAIL,
        payload: err
    })
})
}

export const getVendor = (firebase_id) => dispatch => {
    dispatch({
        type: vendorTypes.FETCH_VENDOR_START
    })
    console.log("vendor firebase id actions", firebase_id)
    axios.get(`vendor/${firebase_id}`)
        .then(res => {
            console.log(res, 'in register action')
            const payload = {
                ...res.data
            }
            dispatch({
                type: vendorTypes.FETCH_VENDOR_SUCCESS,
                payload: payload
            })
        })
        .catch(err => {
            dispatch({
                type: vendorTypes.FETCH_VENDOR_FAIL,
                payload: err
            })
        })
}

export const getStripeToken = (stripe_id, firebase_id) => dispatch => {
    dispatch({
        type: vendorTypes.STRIPE_ONBOARDING_START,
        payload: "Stripe onboarding flow started"
    })
    axios.post((`/stripe/token`, {stripe_id}))
    .then(res => {
        console.log('stripe response', res)
        if (res.status === 200) {
            dispatch({
                type: vendorTypes.STRIPE_ONBOARDING_SUCCESS,
                payload: "Stripe added"
            })
            axios.put(`/vendor/${firebase_id}`, {stripe_id})
            .then(res => {
                if (res.status === 200) {
                    console.log("The vendor's stripe id has been added!", res.data)
                    dispatch({
                        type: vendorTypes.STRIPE_ONBOARDING_SUCCESS,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: vendorTypes.STRIPE_ONBOARDING_FAIL,
                        payload: "Stripe onboarding fail"
                    })
                }
            })
        }
    })
    .catch(err => {
        dispatch({
            type:  vendorTypes.STRIPE_ONBOARDING_FAIL,
            payload: err
        })
    })
}

export const updateVendor = (firebase_id, changes) => dispatch => {
    dispatch({
        type: vendorTypes.STRIPE_ONBOARDING_START,
    })
    console.log("firebase from vendor update", firebase_id)
    axios.put(`vendor/${firebase_id}`, {changes})
    .then(res => {
        dispatch({
            type: vendorTypes.STRIPE_ONBOARDING_SUCCESS,
            payload: changes
        })
    })
    .catch(err => {
        dispatch({
            type: vendorTypes.STRIPE_ONBOARDING_FAIL,
            payload: err
        })
    })
}
export default {
    getVendor,
    VendorRegistration,
    getStripeToken,
    updateVendor,
}