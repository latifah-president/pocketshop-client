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
                    // console.log("res spread ", ...res.data)
                    dispatch({
                        type: authTypes.AUTH_SUCCESS,
                        payload: res.data
                    })
                })
            }
        })
        // const data = { email, uid, user_type }
        // dispatch ({
        //     type: authTypes.AUTH_SUCCESS,
        //     payload: data
        // })
    } else {
        dispatch ({
            type: authTypes.AUTH_FAIL
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
        console.log("user from init0auth 201:", userObj)

        const data = {
            email: userObj.email,
            firebase_id: userObj.firebase_id,
            user_type: userObj.user_type
        }
        dispatch({
            type: authTypes.REGISTER_SUCCESS,
            payload: data
        })
    }
   })
   .catch( err => {
    dispatch({
        type: authTypes.REGISTER_FAIL,
        payload: err
    })
})
        // if (user.email) {
        //     const response = await axios.post("/vendor/register", { ...user }).then(res => res.data)
        //   console.log("data from register", )
        //         dispatch({
        //             type: authTypes.AUTH_SUCCESS,
        //             payload: {usertest: "test"}
        //         })
         
            // .catch( err => {
            //     dispatch({
            //         type: authTypes.AUTH_FAIL,
            //         payload: err
            //     })
            // })
        //}
  
  
    
}
export default {
    init0auth,
    register,
}