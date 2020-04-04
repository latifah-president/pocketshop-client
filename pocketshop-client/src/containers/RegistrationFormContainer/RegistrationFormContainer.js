import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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

export const SignUpForm = ({ error, handleErrors, handleSubmit }) => {
  const [state, setState] = useState("");

  const classes = useStyles();

  const handleNameChange = () => {};

  return (
    <div className="form-container sign-up-container">
      <h1 className="font-bold m-0">Create Account</h1>
      <FormControl>
        <div className={classes.root}>
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="First name"
            // defaultValue="Hello World"
            variant="outlined"
            margin="dense"
            onChagne={handleNameChange}
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="Last name"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            // fullWidth
            label="Email"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            // fullWidth
            label="Password"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            label="Street address"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="City"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          {/* <TextField
          required
          className={classes.textFieldThin}
          id="outlined-required"
          label="State"
          margin="dense"
          // defaultValue="Hello World"
          variant="outlined"
        /> */}
          <InputLabel>State</InputLabel>
          <Select
            className={classes.selectFieldThin}
            variant="outlined"
            margin="dense"
            value={state}
            label="State"
          >
            {stateCodes.map(code => (
              <MenuItem value={code}>{code}</MenuItem>
            ))}
          </Select>
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="Zip"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldThin}
            id="outlined-required"
            label="Country"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textFieldWide}
            id="outlined-required"
            label="Phone number"
            margin="dense"
            // defaultValue="Hello World"
            variant="outlined"
          />
        </div>
      </FormControl>
      {/* <button
        className="rounded-xxl border border-light-blue bg-dark-blue text-white cursor-pointer text-xs font-bold py-3 px-12 tracking-wide uppercase ease-in duration-75"
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-up__form");
        }}
      >
        Sign Up
      </button> */}
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
};

export const SignInForm = ({ error, handleErrors, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className="form-container sign-in-container">
      <h1 className="font-bold m-0">Sign in</h1>
      <TextField
        required
        className={classes.textField}
        id="outlined-required"
        label="Email"
        margin="dense"
        // defaultValue="Hello World"
        variant="outlined"
      />
      <TextField
        required
        className={classes.textField}
        id="outlined-required"
        label="Password"
        margin="dense"
        // defaultValue="Hello World"
        variant="outlined"
      />
      {/* <button
        className="rounded-xxl border border-light-blue bg-dark-blue text-white cursor-pointer text-xs font-bold py-3 px-12 tracking-wide uppercase ease-in duration-75"
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-in__form");
        }}
      >
        Sign In
      </button> */}
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  );
};
