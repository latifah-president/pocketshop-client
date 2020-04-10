import React, {useEffect} from "react";
import axios from "./../../axiosinstance";
import queryString from "query-string";
import { useSelector, useDispatch} from "react-redux";
import {getVendor} from "./../../strore/actions/vendor";

const VendorProfile = (props) => {

    const firebase_id = useSelector(state => state.user.firebase_id)
    const dispatch = useDispatch();

    let params = queryString.parse(props.location.search)
    let stripeToken = params.code
console.log("VENDOR FIREBASE_ID", firebase_id)
    useEffect (() => {
        // axios.get(`http://localhost:8585/vendor/${firebase_id}`)
        // .then (res => {
        //     console.log("vendor data", res)
        // })
        // dispatch(getVendor(firebase_id))
        console.log("in vendor profile")
        // return () => {
        //     console.log("unsubscribe ")
        //   }
    }, [])
    return(
        <div>Vendor profile</div>
    )
};

export default VendorProfile