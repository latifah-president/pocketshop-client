import { authTypes, vendorTypes } from './../actions/actionTypes';

const initialState = {
    // vendor: {
        stripe_id: null,
        vendor_name: null,
        email: null,
        firebase_id: null,
        first_name: null,
        last_name: null,
        user_type: null,
        street_address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        phone_number: null,
        availableBalance: 0,
        pendingBalance: 0,
        payout: 0,
    // },
    onboarded: false,
    stripeConnected: false,
    loading: false,
    error: null,
    loggedIn: false,

};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case authTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                stripe_id: actions.payload.stripe_id,
                vendor_name: actions.payload.vendor_name,
                email: actions.payload.email,
                firebase_id: actions.payload.firebase_id,
                first_name: actions.payload.first_name,
                last_name: actions.payload.last_name,
                user_type: actions.payload.firebase_id,
                street_address: actions.payload.street_address,
                city: actions.payload.city,
                state: actions.payload.state,
                zip: actions.payload.zip,
                country: actions.payload.country,
                phone_number: actions.payload.phone_number,
                loading: false,
                error: false,
                loggedIn: true,
                onboarded: true
            }
            // case authTypes.AUTH_FAIL:
            //     return {
            //         ...state,
            //         loading: false,
            //         error: actions.payload,
            //         loggedIn: false,
            //         onboarded: false,
            //     }
            case authTypes.VENDOR_REG_START:
                    return {
                        ...state,
                        loading: true
                    }
            case authTypes.VENDOR_REG_SUCCESS:
                return {
                    ...state,
                    // vendor: {
                        ...state.vendor,
                        stripe_id: null,
                        vendor_name: actions.payload.vendor_name,
                        email: actions.payload.email,
                        firebase_id: actions.payload.firebase_id,
                        first_name: actions.payload.first_name,
                        last_name: actions.payload.last_name,
                        user_type: actions.payload.user_type,
                        street_address: actions.payload.street_address,
                        city: actions.payload.city,
                        state: actions.payload.state,
                        zip: actions.payload.zip,
                        country: actions.payload.country,
                        phone_number: actions.payload.phone_number,
                    // },
                    loading: false,
                    error: false,
                    loggedIn: true,
                    onboarded: true,
                    stripeConnected: false
                }
            case authTypes.VENDOR_REG_FAIL:
                return {
                    ...state,
                    // vendor: null,
                    loading: false,
                    error: actions.payload,
                    loggedIn: false,
                    onboarded: false,
                }
                    case vendorTypes.STRIPE_ONBOARDING_START:
                        return {
                            ...state,
                            loading: true
                        }
                    case vendorTypes.STRIPE_ONBOARDING_SUCCESS:
                        return {
                            ...state,
                            // stripe_id: actions.payload.stripe_id,
                        // vendor_name: vendor_name,
                        // email: email,
                        // firebase_id: firebase_id,
                        // first_name: first_name,
                        // last_name: last_name,
                        // user_type: user_type,
                        // street_address: street_address,
                        // city: city,
                        // state: state,
                        // zip: zip,
                        // country: country,
                        // phone_number: phone_number,
                            stripe_id: actions.payload.stripe_id,
                            stripeConnected: true,
                            loading: false,
                            error: false,
                        }
                    case vendorTypes.STRIPE_ONBOARDING_FAIL:
                        return {
                            ...state,
                            stripeConnected: false,
                            loading: false,
                            error: actions.payload
                        }
                        case vendorTypes.FETCH_VENDOR_START:
                            return {
                                ...state,
                                loading: true
                            }
                        case vendorTypes.FETCH_VENDOR_SUCCESS:
                            return {
                                ...state,
                                // vendor: {
                                    // ...state.vendor,
                                    stripe_id: actions.payload.stripe_id,
                                    vendor_name: actions.payload.vendor_name,
                                    email: actions.payload.email,
                                    firebase_id: actions.payload.firebase_id,
                                    first_name: actions.payload.first_name,
                                    last_name: actions.payload.last_name,
                                    user_type: actions.payload.user_type,
                                    street_address: actions.payload.street_address,
                                    city: actions.payload.city,
                                    state: actions.payload.state,
                                    zip: actions.payload.zip,
                                    country: actions.payload.country,
                                    phone_number: actions.payload.phone_number,
                                    loading: false,
                                    error: false,
                                // }
                            }
                            case vendorTypes.FETCH_VENDOR_FAIL:
                                return {
                                    ...state,
                                    error: actions.payload,
                                    // vendor_name: null
                                }
                            case vendorTypes.PAYOUT_START:
                                return {
                                    ...state,
                                    loading: true
                                }
                            case vendorTypes.PAYOUT_SUCCESS:
                                return {
                                    ...state,
                                    availableBalance: actions.payload.available,
                                    pendingBalance: actions.payload.pending,
                                    payout: actions.payload.payout,
                                    loading: false
                                }
                             case vendorTypes.PAYOUT_FAIL:
                                 return {
                                     ...state,
                                     error: actions.payload,
                                     loading: false
                                 }

            default:
            return state;
    };

  

}