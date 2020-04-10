import React, {useState, useRef} from 'react';
import { withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {MenuItem} from "@material-ui/core";
import {mainBtnColor} from "./../../global-styles/styles"
import { VendorRegistration } from '../../strore/actions/vendor';

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
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      margin: "5rem 0 2rem 0",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        // border: "1px solid red",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    selectFieldThin: {
        marginLeft: theme.spacing(2),
        width: "200px",
        height: "55px"
      },
    header: {
        marginTop: "3rem",
    },
    gridItem: {
        marginTop: "2rem",
        // border: "1px solid red",
        width: "40%",
    },
    textField: {
        marginBottom: "1rem",
    },
    stripGrid: {
        border: "2px solid #e6ebf1",
        borderRadius: "5px",
        padding: "1rem",
    },
    btnGrid: {
        margin: "1rem",
        // border: "1px solid orange",
        width: "28%",
    },
    btn: {
        backgroundColor: `${mainBtnColor}`,
        height: "55px",
        color: "white",
        "&:hover": {
            backgroundColor: `${mainBtnColor}`,
        }
    },
    stateInp: {
        marginLeft: theme.spacing(2),

    }
  }));

const OnboardingForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [vendor_name, setVendorName] = useState("")
    const [street_address, setStreetAdd] = useState("");
    const [city, setCity] = useState("");
    const [state, setStateInp] = useState("");
    const [zip, setZip] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const email = useSelector(state => state.user.email);
    const user_type = useSelector(state => state.user.user_type);
    const firebase_id = useSelector(state => state.user.firebase_id);

    console.log(firebase_id, "firebase onboarding")
    const inputLabel =useRef(null);
    const initStripe = (e) => {
        e.preventDefault()
        const userObj = {
            vendor_name: vendor_name,
            email: email,
            firebase_id: firebase_id,
            first_name: first_name,
            last_name: last_name,
            user_type: user_type,
            street_address: street_address,
            city: city,
            state:state,
            zip: zip,
            country: "US",
            phone_number: phone_number
        }
        dispatch(VendorRegistration(userObj))
        window.location.href = `http://localhost:8585/stripe/authorize/?business_type=individual&business_name=${vendor_name}&first_name=${first_name}&last_name=${last_name}&email=${email}&street_address=${street_address}&city=${city}&zip=${zip}&state=${state}&country=US`
    }
    return (
        <Grid container className={classes.root}>
            <Typography className={classes.header} variant="h4">Complete your profile</Typography>
            <form className={classes.form}>
                <Grid item className={classes.gridItem}>
                    <Typography variant="subtitle1">PERSONAL INFORMATION</Typography>
                    <TextField className={classes.textField}  fullWidth required id="first_name" label="First Name" variant="outlined" value={first_name} onChange={e => setFirstName(e.target.value)}/>
                    <TextField className={classes.textField}  fullWidth required id="last_name" label="Last Name" variant="outlined" value={last_name} onChange={e => setLastName(e.target.value)}/>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography variant="subtitle1">BUSINESS INFORMATION</Typography>
                        <TextField className={classes.textField}  fullWidth required id="vendor_name" label="Business Name" variant="outlined" value={vendor_name} onChange={e => setVendorName(e.target.value)}/>
                        <TextField className={classes.textField}  fullWidth required id="Address" label="Address" variant="outlined" value={street_address} onChange={e => setStreetAdd(e.target.value)}/>
                        <TextField className={classes.textField} style={{width: "300px"}}  required id="City" label="City" variant="outlined" value={city} onChange={e => setCity(e.target.value)}/>
                    <FormControl variant="outlined"  required >
                        <InputLabel className={classes.stateInp} ref={inputLabel} htmlFor="State" >State</InputLabel>
                        <Select
                            className={classes.selectFieldThin}
                            variant="outlined"
                            margin="dense"
                            id="state"
                            value={state}
                            label="State"
                            onChange={e => setStateInp(e.target.value)}
                        >
                            {stateCodes.map(code => (
                            <MenuItem value={code}>{code}</MenuItem>
                            ))}
                        </Select> 
                    </FormControl> 
                    <TextField className={classes.textField}  fullWidth required id="Zip_Code" label="Zip Code" variant="outlined" onChange={e => setZip(e.target.value)}/>
                    <TextField className={classes.textField}  fullWidth required id="phone_number" label="Phone Number" variant="outlined" onChange={e => setPhoneNumber(e.target.value)}/>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography variant="subtitle1">PAYMENT INFORMATION</Typography>
                    <Grid className={classes.stripGrid}>
                    <Typography variant="body1">
                        We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. 
                        Click <strong>Save and continue</strong> to set up your payments on Stripe.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.btnGrid}>
                    <Button type="submit" fullWidth className={classes.btn} onClick={ e =>  {initStripe(e)} }>SAVE AND CONTINUE</Button>
                </Grid>
            </form>
        </Grid>
    )
};

export default withRouter(OnboardingForm)