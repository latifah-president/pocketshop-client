import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from './../../context/authcontext';

import axios from "./../../axiosinstance";
import queryString from "query-string";
import {auth} from "./../../firebaseconfig";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';

import { blue } from "@material-ui/core/colors";

import { ProductCard } from "../../components/ProductCard/ProductCard";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import ProductsContainer  from "../../containers/ProductsContainer/ProductsContainer";
import { CategoryDropdown } from "../../components/CategoryDropdown/CategoryDropdown";
import {mainBtnColor} from "./../../global-styles/styles";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    height: "3ch"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  btn: {
    backgroundColor: `${mainBtnColor}`
  },
  icon: {
    color: "white",
  },
  total: {
    marginLeft: ".5rem",
    color: "white",
  }
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [category, setCategory] = useState("all");
  const [stripeId, setStripeId] = useState("");


  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };
  useEffect (() => {
    let params = queryString.parse(props.location.search)
    let stripeToken = params.code
    console.log('params with code:', params.code)
      axios.get(`/stripe/token?code=${params['code']}`)
      .then(res => {
        if (res.status === 200) {
          console.log("Stipe Onboarding Completed!")
          let firebase_id = localStorage.getItem("firebase_id")
          //TODO: REMOVE PUT REQUEST AND HANDLE UPDATING THE VENDOR'S STRIPE INFO ON FRONTEND
          axios.put(`/vendor/${firebase_id}`, {stripe_id: params.code})
          .then(res => {
            if (res.status === 200) {
              console.log("The vendor's stripe id added!")
            }
          })
          .catch (err => {
            console.log("The vendor's stripe id was not added:", err)
            //TODO: IF STRIPE VENDOR ON BOARDING FAILS SET STRIPE_FALE TO TRUE
            // IF TRUE A POPUP SHOULD SHOW UP ASKING THE VENDOR TO SIGN IN AGAIN
            //ONCE CLICKED THE INIT STRIPE FUNCTION SHOULD BE LAUNCHED
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  }
  return (
    <div>
      <div className="business-info-bar">
        <div className="business-logo"></div>
      </div>
      <div className="products-header">
        <SearchBar></SearchBar>
        <CategoryDropdown
          category={category}
          handleCategoryChange={handleCategoryChange}
        ></CategoryDropdown>
        <Button variant="contained" className={classes.btn} >
          <ShoppingCartIcon className={classes.icon}></ShoppingCartIcon>
          <Typography variant="button" display="block" className={classes.total} >
          $0.00
      </Typography>
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={logout}
>
        Log Out
      </Button>
      </div>
      <ProductsContainer></ProductsContainer>
    </div>
  );
};

export default withRouter(HomePage);
