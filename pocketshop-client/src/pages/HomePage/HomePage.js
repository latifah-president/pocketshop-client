import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from './../../context/authcontext';

import axios from "./../../axiosinstance";
import queryString from "query-string";
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    height: "3ch",
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
  const [stripeSuccess, setStripeSuccess] = useState(false);


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  console.log(stripeSuccess)
  const getStripeToken = () => {
    let params = queryString.parse(props.location.search)
    let stripeToken = params.code
    console.log('params with code:', params.code)
      axios.post(`/stripe/token`, {stripeToken})
      .then(res => {
        console.log("stripe res", res)

        if (res.status === 200) {
          //TODO: CLEAN UP THE ERROR HANDLING ON FRONT AND BACK END
          console.log("Stipe Onboarding Completed!")
          // setStripeSuccess(true)
          let firebase_id = localStorage.getItem("firebase_id")
          //TODO: REMOVE PUT REQUEST AND HANDLE UPDATING THE VENDOR'S STRIPE INFO ON FRONTEND
          axios.put(`/vendor/${firebase_id}`, {stripe_id: params.code})
          .then(res => {
            if (res.status === 200) {
              console.log("The vendor's stripe id has been added!")
            }
          })
          .catch (err => {
            console.log("The vendor's stripe id was not added:", err)
            //TODO: IF STRIPE VENDOR ON BOARDING FAILS SET STRIPE_FALE TO TRUE
            // IF TRUE A POPUP SHOULD SHOW UP ASKING THE VENDOR TO SIGN IN AGAIN
            //ONCE CLICKED THE INIT STRIPE FUNCTION SHOULD BE LAUNCHED
          })
        } else {
          // setStripeSuccess(false)
          console.log("fail")
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect (() => {
    console.log("use effect stripe")
      getStripeToken()
      return () => {
        console.log("unsubscribe ")
      }
  }, [stripeSuccess])

  return (
    <div className="home-page">
      <div className="grid-cols-8 gap-4">
        <div
          style={{
            gridColumn: "span 2 / span 2",
            backgroundImage:
              "url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/52692462_1018395905028239_7366818916456202240_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=pTMDztd9Ao0AX_X00OZ&_nc_ht=scontent-dfw5-1.xx&oh=9a8f3b15ad3301b36b863f70ff545ae7&oe=5EAE70C7)",
            backgroundSize: "cover",
            width: "200px",
            height: "200px",
            display: "inline-block",
          }}
        ></div>
        <div className="col-span-3">
          <SearchBar></SearchBar>
        </div>
        <div className="col-span-3">
          <CategoryDropdown
            className="category-dropdown"
            category={category}
            handleCategoryChange={handleCategoryChange}
          ></CategoryDropdown>
        </div>
      </div>
      <ProductsContainer></ProductsContainer>
    </div>
  );
};

export default withRouter(HomePage);
