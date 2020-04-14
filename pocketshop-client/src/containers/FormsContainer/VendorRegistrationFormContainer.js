import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "../../axiosinstance";
import {auth} from "../../firebaseconfig";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {MenuItem, Typography} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { register, init0auth } from "../../strore/actions/user";
import {useDispatch} from 'react-redux';
// import actions from "./../../strore/actions/"
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 280
  },
  textFieldThin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "200px",
    justifyContent: "left"
  },
  textFieldWide: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "416px",
    justifyContent: "left"
  },
  selectFieldThin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "200px",
    justifyContent: "left"
  },
  root: {
    justifyContent: "center",
    margin: theme.spacing(20),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "500px"
  },
  header: {
    marginBottom: "2rem",
  }
}));

const stateCodes = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  // const initStripeConnection = () => {
  //     axios.get(`/stripe/authorize/?business_type=individual&business_name=${first_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&state=${state}&zip=${zip}&country=US`)
  //          .then(res => {
  //            console.log("stripe auth data", res.data)
  //           // window.location.href = `https://pocket-shop.herokuapp.com/stripe/authorize/?business_type=individual&business_name=${vendor_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&state=${state}&country=US`
  //          })
  //          .catch(err => {
  //            console.log(err)
  //          })
  // }
  const signUpWithEmailAndPassword = () => {
    if (!email || !password) return
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            console.log("incoming user", user);
            if (user.email) {
              const { email, uid } = user;
              localStorage.setItem("firebase_id", uid)
              console.log("emailuser", user);
              const userObj = {
                  firebase_id: uid,
                  email,
                  user_type: 'vendor',
                };
                console.log("userObj", userObj)
                dispatch(register(userObj))
               
                  props.history.push(`/vendor/onboarding`)

              
            }
          }
        })
        .catch(err => {
          console.log("Error Authenticating User:", err)
        });
  };

  return (
    <div className="form-container sign-up-container" >
      <FormControl >
        <form className={classes.root} >
          <Typography variant="h4" className={classes.header} >Become A PocketShop Vendor</Typography>
          <TextField
            required
            className={classes.textFieldWide}
            id="email"
            label="Email"
            margin="dense"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="password"
            label="Password"
            margin="dense"
            variant="outlined"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </form>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" onClick={signUpWithEmailAndPassword}>Sign Up</Button>
    </div>
  );
};

export default withRouter(SignUpForm)



