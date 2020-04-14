import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { withRouter } from "react-router-dom";
import {auth} from "../../firebaseconfig";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {MenuItem, Typography} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import { register } from "../../strore/actions/user";
import {mainBtnColor, GreenRadient} from "./../../global-styles/styles"

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexGrow: 1,
    // border: "5px solid red",
    [theme.breakpoints.down('sm')]: {
      height: "70%",
    }
  },
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
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
  },
  btn: {
    margin: theme.spacing(2, 0),
    color: "white",
    width: "60%",
    backgroundColor: `${GreenRadient}`,

    "&:hover": {
      backgroundColor: `${mainBtnColor}`,

    }
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [error, setError] = useState(false);
  const [errorTitle] = useState("Error From User Registration");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const signUpWithEmailAndPassword = () => {
    if (!email || !password || !firstName || !lastName) {

    }
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
                  first_name: firstName,
                  last_name: lastName,
                  email,
                  firebase_id: uid,
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
          setError(true)
          setErrorMessage(err.message)
        })
        
  };

  return (
    <Grid container item xs={12} className={classes.wrapper}>
      <FormControl >
        <form className={classes.root} >
          <Typography variant="h4" className={classes.header} >Become A PocketShop Vendor</Typography>
          <TextField
            required
            className={classes.textFieldWide}
            id="firstName"
            type="text"
            label="First Name"
            margin="dense"
            variant="outlined"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
            <TextField
            required
            className={classes.textFieldWide}
            id="lastName"
            type="text"
            label="Last Name"
            margin="dense"
            variant="outlined"
            value={lastName}
            onChange={e => setlastName(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="email"
            label="Email"
            margin="dense"
            variant="outlined"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="password"
            label="Password"
            type="password"
            margin="dense"
            variant="outlined"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          
          <Button className={classes.btn} type="submit" variant="contained" color="primary" onClick={signUpWithEmailAndPassword}>Sign Up</Button>

        </form>

      </FormControl>
      {error ? <ErrorModal errorTitle={errorTitle} errorMessage={errorMessage}/> : null}
    </Grid>
  );
};

export default withRouter(SignUpForm)



