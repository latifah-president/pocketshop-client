import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch} from "react-redux";
import {getVendor, } from "./../../strore/actions/vendor";
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
        justifyContent: "space-between"

    },
    vendorDetails: {
        border: "1px solid orange",
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing(2),
        // flexDirection: "row",
    },

   stripeDetails: {
        border: "1px solid pink"
    },
    vendorLogo: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    vendorDetailsText: {
        border: "1px soid blue",
        // display: "flex",
        flexDirection: "cloumn",
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

    const vendorfirebase_id = useSelector(state => state.vendor.firebase_id)
    const dispatch = useDispatch();

    let params = queryString.parse(props.location.search)
    let stripeToken = params.code
console.log("VENDOR FIREBASE_ID", vendorfirebase_id)
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
            <Grid item xs={7}className={classes.stripeDetails}>
                <Typography gutterBottom variant="subtitle1">
                    This Week
                </Typography>
                <Typography gutterBottom variant="h3" >
                    $0.00
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    )
};

export default VendorProfile