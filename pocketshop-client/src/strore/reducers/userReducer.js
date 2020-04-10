import { authTypes } from './../actions/actionTypes';

const initialState = {
    email: null,
    firebase_id: null,
    user_type: null,
    first_name: null,
    last_name: null,
    street_address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    phone_number: null,
    loading: false,
    error: null,
    loggedIn: false,
};

export default (state = initialState, actions) => {
   console.log(state, initialState, 'in reducer')
    switch (actions.type) {
        case authTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                email: actions.payload.email,
                firebase_id: actions.payload.firebase_id,
                user_type: actions.payload.firebase_id,
                first_name: actions.payload.first_name,
                last_name: actions.payload.last_name,
                street_address: actions.payload.street_address,
                city: actions.payload.city,
                state: actions.payload.state,
                zip: actions.payload.zip,
                country: actions.payload.country,
                phone_number: actions.payload.phone_number,
                loading: false,
                error: false,
                loggedIn: true,
            }
  
            // case authTypes.AUTH_FAIL:
            //     return {
            //         ...state,
            //         user: null,
            //         loading: false,
            //         error: actions.payload,
            //         loggedIn: false,
            //     }
            case authTypes.REGISTER_START:
                    return {
                        ...state,
                        loading: true
                    }
            case authTypes.REGISTER_SUCCESS:
                return {
                    ...state,
                    user: {
                        ...state.user,
                        email: actions.payload.email,
                        firebase_id: actions.payload.firebase_id,
                        user_type: actions.payload.user_type
                    },
                    loading: false,
                    error: false,
                    loggedIn: true,
                }
            case authTypes.REGISTER_FAIL:
                return {
                    ...state,
                    user: null,
                    loading: false,
                    error: actions.payload,
                    loggedIn: false,
                }

            default:
            return state;
    };

  

}