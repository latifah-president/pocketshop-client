import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignUpForm from "../../containers/FormsContainer/RegistrationFormContainer";
import SignInForm from "../../containers/FormsContainer/LoginFormContainer";
import Grid from '@material-ui/core/Grid';
import  RegistrationFormOverlay  from "../../components/RegistrationFormOverlay/RegistrationFormOverlay";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    // border: "1px solid orange",
    marginTop: "4rem",
    height: "100vh",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
  },
}))

const handleSubmit = () => {};

 const VendorRegistrationPage = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} >
      <RegistrationFormOverlay/>

      <SignUpForm handleSubmit={handleSubmit} />
      {/* <SignInForm handleSubmit={handleSubmit} /> */}
    </Grid>
  );
};

export default VendorRegistrationPage