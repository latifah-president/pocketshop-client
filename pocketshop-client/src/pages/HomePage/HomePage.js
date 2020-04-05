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

import { blue } from "@material-ui/core/colors";

import { ProductCard } from "../../components/ProductCard/ProductCard";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ProductsContainer } from "../../containers/ProductsContainer/ProductsContainer";
import { CategoryDropdown } from "../../components/CategoryDropdown/CategoryDropdown";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    height: "3ch"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
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
              console.log("The vendor's stripe id not added!")
            }
          })
          .catch (err => {
            console.log("The vendor's stripe id was not added:", err)
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
        <Button variant="contained" color="primary">
          <ShoppingCartIcon color="default"></ShoppingCartIcon>
          <span> $0.00 </span>
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
