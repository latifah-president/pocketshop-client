import React, { useEffect, useState } from "react";
import axios from "./axiosinstance";
import { Switch, Route, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import VendorRegistrationPage from "./pages/VendorRegistrationPage/VendorRegistrationPage";
import { CustomerRegistrationPage } from "./pages/CustomerRegistrationPage/CustomerRegistrationPage";
import VendorProfile from "./pages/VendorProfilePage/VendorProfile";
import StripeOnboarding from "./pages/StripeOnboarding/Onboarding";
import firebase from "./firebaseconfig";
import HomePage from "./pages/HomePage/HomePage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { init0auth } from "./strore/actions/user";
import { GetDeliveryAddressPage } from "./pages/GetDeliveryAddressPage/GetDeliveryAddressPage";

function App(props) {
  const [home, setHome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        console.log("state change user", user);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((idToken) => {
            axios.defaults.headers.common["Authorization"] = idToken;
            dispatch(init0auth(email, uid, idToken));
            setIsLoggedIn(true);
          })
          .catch((err) => {
            console.log(err.message);
            setIsLoggedIn(false);
          });
      }
    });
    return () => {
      console.log("unsubscribe ");
    };
  }, [dispatch]);

  return (
    <div>
      <NavBar home={home} />

      <Switch>
        {/* <Route exact path="/:vendor_name">
          <HomePage />
        </Route> */}
        <Route exact path="/registration/vendor">
          <VendorRegistrationPage />
        </Route>
        <Route exact path="/registration/customer">
          <CustomerRegistrationPage />
        </Route>

        <Route exact path="/vendor/onboarding" component={StripeOnboarding} />
        <Route exact path="/vendor/:id" component={VendorProfile} />
        {/* <StripeOnboarding/>
        </Route> */}
        <Route
          exact
          path="/delivery_address"
          // component={GetDeliveryAddressPage}
        >
          <GetDeliveryAddressPage></GetDeliveryAddressPage>
        </Route>
        <Route exact path="/cart">
          <ShoppingCartPage></ShoppingCartPage>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
