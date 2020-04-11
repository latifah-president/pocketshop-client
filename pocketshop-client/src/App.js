import React, { useEffect, useState } from "react";
import axios from "./axiosinstance";
import { Switch, Route, withRouter } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { VendorRegistrationPage } from "./pages/VendorRegistrationPage/VendorRegistrationPage";
import { CustomerRegistrationPage } from "./pages/CustomerRegistrationPage/CustomerRegistrationPage";
import VendorProfile from "./pages/VendorProfilePage/VendorProfile";
import StripeOnboarding from "./pages/StripeOnboarding/Onboarding";
import firebase from './firebaseconfig';
import HomePage from "./pages/HomePage/HomePage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import NavBar  from "./components/NavBar/NavBar";
import "./App.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { init0auth } from "./strore/actions/user";


function App(props) {
  const [home, setHome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticated = useSelector(state => state.user.firebase_id)
  const dispatch = useDispatch();
console.log(authenticated, "user")

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          const { email, uid }= user
          console.log("state change user", user)
            firebase.auth().currentUser.getIdToken()
            .then(idToken => {
              axios.defaults.headers.common["Authorization"] = idToken;
                dispatch(init0auth(email, uid, idToken))
                setIsLoggedIn(true)
            })
            .catch(err => {
                console.log(err.message)
                setIsLoggedIn(false)
            })
        }
    })
    return () => {
      console.log("unsubscribe ")
    }
  }, []);

 

  return (
    <div>
      <NavBar home={home} />
   
      <Switch>
      <Route exact path="/">
          <HomePage />
        </Route>        
        <Route exact path="/registration/vendor">
          <VendorRegistrationPage />
        </Route>
        <Route path="/registration/customer">
          <CustomerRegistrationPage />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage></ShoppingCartPage>
        </Route>
        <Route exact path="/vendor/onboarding" component={StripeOnboarding}/>
        <Route exact path="/vendor/:id" component={VendorProfile}/>
          {/* <StripeOnboarding/>
        </Route> */}        
      </Switch>
    
    </div>
  );
}

export default withRouter(App);
