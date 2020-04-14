import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import registrationImage from "./../../assets/images/mike-petrucci-c9FQyqIECds-unsplash.jpg";
// import "./styles.css";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    // border: "3px solid  green",
    height: "100%",
    top: "80px",
    backgroundImage: `url(${registrationImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    }
  },
}))
const  RegistrationFormOverlay = () => {
  const classes = useStyles();
return (
  <Grid container item className={classes.wrapper} xs={12}></Grid>
)
 };


 export default RegistrationFormOverlay;