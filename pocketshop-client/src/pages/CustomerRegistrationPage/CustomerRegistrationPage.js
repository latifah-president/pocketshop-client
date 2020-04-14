import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import SignUpForm from "../../containers/FormsContainer/CustomerRegistrationFormContainer";
import SignInForm from "../../containers/FormsContainer/LoginFormContainer";
import { RegistrationFormOverlay } from "../../components/RegistrationFormOverlay/RegistrationFormOverlay";

import history from "../../history";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const handleSubmit = () => {};

export const CustomerRegistrationPage = () => {
  const classes = useStyles();
  return (
    <div className="registration-container" id="container">
      <SignUpForm handleSubmit={handleSubmit} />
      <SignInForm handleSubmit={handleSubmit} />
      <RegistrationFormOverlay></RegistrationFormOverlay>
    </div>
  );
};
