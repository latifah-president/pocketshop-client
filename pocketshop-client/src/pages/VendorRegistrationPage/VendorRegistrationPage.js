import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignUpForm from "../../containers/RegistrationFormContainer/RegistrationFormContainer";
import SignInForm from "../../containers/RegistrationFormContainer/LoginFormContainer";
import { RegistrationFormOverlay } from "../../components/RegistrationFormOverlay/RegistrationFormOverlay";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 280
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const handleSubmit = () => {};

export const VendorRegistrationPage = () => {
  return (
    <div className="registration-container" id="container">
      <SignUpForm handleSubmit={handleSubmit} />
      <SignInForm handleSubmit={handleSubmit} />
      <RegistrationFormOverlay></RegistrationFormOverlay>
    </div>
  );
};
