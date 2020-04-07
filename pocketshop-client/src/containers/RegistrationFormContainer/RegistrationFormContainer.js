import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "./../../axiosinstance";
import {auth} from "./../../firebaseconfig";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {MenuItem, Typography} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

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

const SignUpForm = ({ error, handleErrors, handleSubmit }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street_address, setStreetAdd] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateInp] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [vendor_name, setVendorName] = useState("")

  const inputLabel = React.useRef(null);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);

  }, [])

  const classes = useStyles();

  const initStripeConnection = () => {
      axios.get(`/stripe/authorize/?business_type=individual&business_name=${first_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&state=${state}&zip=${zip}&country=US`)
           .then(res => {
             console.log("stripe auth data", res.data)
            // window.location.href = `https://pocket-shop.herokuapp.com/stripe/authorize/?business_type=individual&business_name=${vendor_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&state=${state}&country=US`
           })
           .catch(err => {
             console.log(err)
           })
  }


  const signUpWithEmailAndPassword = () => {
    if (!email || !password) return
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            const { uid } = user;
            console.log("incoming user", user);
            localStorage.setItem('firebase_id', uid);
            if (user.email) {
              const { email } = user;
              console.log("emailuser", user);
              const userObj = {
                  firebase_id: uid,
                  email,
                  user_type: 'vendor',
                  first_name,
                  last_name,
                  street_address,
                  city,
                  state,
                  zip,
                  country,
                  phone_number,
                  vendor_name
                };
              axios
                .post("/vendor/register", { ...userObj })
                .then(res => {
                  console.log(res,'res from register')
                  if (res.status === 201) {
                    console.log("registration completed. User Aquired!")
                    // initStripeConnection()
                    window.location.href = `http://localhost:8585/stripe/authorize/?business_type=individual&business_name=${vendor_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&state=${state}&country=US`

                  }
                })
                .catch(err => {
                  console.log("Error: Vendor registration failed:",err);
                });
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
            className={classes.textFieldThin}
            id="first_name"
            label="First name"
            value={first_name}
            variant="outlined"
            margin="dense"
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="last_name"
            label="Last name"
            margin="dense"
            value={last_name}
            variant="outlined"
            onChange={e => setLastName(e.target.value)}
          />
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
           <TextField
            required
            className={classes.textFieldWide}
            id="business_name"
            label="Business Name"
            margin="dense"
            variant="outlined"
            value={vendor_name}
            onChange={e => setVendorName(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            label="Street address"
            margin="dense"
            variant="outlined"
            value={street_address}
            onChange={e => setStreetAdd(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="City"
            margin="dense"
            variant="outlined"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <FormControl variant="outlined" style={{marginTop: ".5rem"}}  required >
          <InputLabel  ref={inputLabel} htmlFor="State" style={{marginLeft: ".5rem"}}>
          State
        </InputLabel>
          <Select
            className={classes.selectFieldThin}
            variant="outlined"
            margin="dense"
            value={state}
            label="State"
            onChange={e => setStateInp(e.target.value)}
            input={
              <OutlinedInput name="State" labelWidth={labelWidth} id="State" />
            }
          >
            {stateCodes.map(code => (
              <MenuItem value={code}>{code}</MenuItem>
            ))}
          </Select> 
           </FormControl>

          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="Zip"
            margin="dense"
            variant="outlined"
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="Country"
            margin="dense"
            variant="outlined"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            label="Phone number"
            margin="dense"
            variant="outlined"
            value={phone_number}
            onChange={e => setPhoneNumber(e.target.value)}
          />
       </form>

      </FormControl>
      <Button type="submit" variant="contained" color="primary" onClick={signUpWithEmailAndPassword}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpForm


