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
  
const SignInForm = ({ error, handleErrors, handleSubmit }) => {
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

  export default SignInForm