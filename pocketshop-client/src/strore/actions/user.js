import {authTypes} from './actionTypes';
import axios from './../../axiosinstance';
 
export const init0auth = (email, uid, idToken) => dispatch => {
    dispatch ({
        type: authTypes.AUTH_START
    })
    if (uid) {
        axios.defaults.headers.common["Authorization"] = idToken;
        axios.get(`/user/${uid}`)
        .then(res => {
            if (res.data.user_type === "vendor") {
                axios.get(`/vendor/${uid}`)
                .then(res => {
                    console.log("vendor res data", res.data)
                    dispatch({
                        type: authTypes.AUTH_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: authTypes.AUTH_FAIL,
                        payload: err
                    })
                })
            }
        })
        .catch(err => {
            dispatch({
                type: authTypes.AUTH_FAIL,
                payload: err
            })
        })
    } else {
        dispatch ({
            type: authTypes.AUTH_FAIL,
            payload: "No uid provided"
        })
    }
};

export const register = (userObj) =>  (dispatch) => {
    dispatch ({
        type: authTypes.REGISTER_START
    })

    console.log("user from init0auth:", userObj)

    axios.post("/user/register", { ...userObj })
    .then(res =>{
    console.log(res.data, 'res.data.users')
    if (res.status === 201) {
        const data = {
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            email: userObj.email,
            firebase_id: userObj.firebase_id,
            user_type: userObj.user_type
        }
        dispatch({
            type: authTypes.REGISTER_SUCCESS,
            payload: data
        })
    } else if (res.status === 400) {
        dispatch({
            type: authTypes.REGISTER_FAIL,
            payload: res.data
        })
    }
   })
   .catch( err => {
    dispatch({
        type: authTypes.REGISTER_FAIL,
        payload: err
    })
})
    
}
export default {
    init0auth,
    register,
}