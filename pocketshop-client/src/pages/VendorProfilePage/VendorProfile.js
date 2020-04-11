import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import axios from "./../../axiosinstance";
import queryString from "query-string";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch} from "react-redux";
import {getVendor, getPayout} from "./../../strore/actions/vendor";
import {mainBtnColor} from "./../../global-styles/styles"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      margin: "4rem 0 2rem 0",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "3px solid red"
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
    vendorInfo: {
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "space-around"

    },
    vendorDetails: {
        border: "1px solid green",
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing(2),
        // flexDirection: "row",
    },

   stripeDetails: {
        border: "5px solid pink",
        // padding: theme.spacing(1),
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: theme.spacing(5),
        
    },
    vendorLogo: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    vendorDetailsText: {
        border: "1px soid blue",
        // display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
    }
  }));

const VendorProfile = (props) => {
    const classes = useStyles();

    const loggedIn = useSelector(state => state.user.loggedIn)
    const user_type = useSelector(state => state.user.user_type)
    const vendor_name = useSelector(state => state.vendor.vendor_name)
    const first_name = useSelector(state => state.vendor.first_name)
    const last_name = useSelector(state => state.vendor.last_name)
    const stripe_id = useSelector(state => state.vendor.stripe_id);
    const vendorfirebase_id = useSelector(state => state.vendor.firebase_id);
    const avialable = useSelector(state => state.vendor.availableBalance);
    const pending = useSelector(state => state.vendor.pendingBalance);
    const payout = useSelector(state => state.vendor.payout);
    // const [avialable, setAvaillable] = useState("");
    // const [pending, setPending] = useState("");
    // const [payout, setPayout] = useState("");
    const dispatch = useDispatch();

    let params = queryString.parse(props.location.search)
    let stripeToken = params.code
console.log("VENDOR FIREBASE_ID", vendorfirebase_id)
console.log("stripe id", stripe_id)

    useEffect(() => {
        // if(stripe_id) {
        //     console.log("stripe id", stripe_id)
        //     axios.post(`/stripe/payout`, {stripe_id})
        //     .then(res => {
        //         console.log(res.data, "payout")
        //         setAvaillable(res.data.avialable)
        //         setPending(res.data.pending)
        //         setPayout(res.data.payout)
        //     })
        //     .catch(err => {
        //         console.log("error from payputs", err)
        //     })
        // }
        dispatch(getPayout(stripe_id))
        return () => {
            console.log("unsubscribe ")
          }
    }, [loggedIn])

    return(
    <Grid container className={classes.root}>
        <Grid item container xs={9} className={classes.vendorInfo}>
            <Grid item container xs={5} className={classes.vendorDetails}>
            <Avatar alt={vendor_name} src="/static/images/avatar/1.jpg" className={classes.vendorLogo} />
            <Grid item xs={5} className={classes.vendorDetailsText} style={{border: "1px solid blue"}}>
                <Typography gutterBottom variant="body2">{vendor_name}</Typography>
                <Typography  variant="h6">{first_name} {last_name}</Typography>
            </Grid>
            
            </Grid>
            <Grid item container xs={4}className={classes.stripeDetails} >
                <Grid item xs={4} style={{border: "1px solid cyan"}}>
                <Typography gutterBottom variant="subtitle1">
                    This Week
                </Typography>
                <Typography gutterBottom variant="h5" >
                    $0.00
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                    0 Orders                  
                </Typography>
                </Grid>
                <Grid item style={{border: "1px solid cyan"}}>
                <Typography gutterBottom variant="subtitle1">
                    Your Balance
                </Typography>
                <Typography gutterBottom variant="h5" >
                    ${((avialable + pending) / 100).toFixed(2)}
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                    ${(avialable / 100).toFixed(2)}                 
                </Typography>
            </Grid>
            </Grid>
            
        </Grid>
    </Grid>
    )
};

export default VendorProfile