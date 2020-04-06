import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import {AuthProvider} from "./context/authcontext";
import { VendorRegistrationPage } from "./pages/VendorRegistrationPage/VendorRegistrationPage";
import { CustomerRegistrationPage } from "./pages/CustomerRegistrationPage/CustomerRegistrationPage";

import { HomePage } from "./pages/HomePage/HomePage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const [home, setHome] = useState(true);
  useEffect(() => {
    // window.location.pathname === "/" ? setHome(true) : setHome(false);
  });

  return (
    <>
      <NavBar home={home} />
      <Switch>
        <AuthProvider>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/registration/vendor">
          <VendorRegistrationPage />
        </Route>
        <Route path="/registration/customer">
          <CustomerRegistrationPage />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage></ShoppingCartPage>
        </Route>
        </AuthProvider>
      </Switch>
    </>
  );
}

export default withRouter(App);
