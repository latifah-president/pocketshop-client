import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { VendorRegistrationPage } from "./pages/VendorRegistrationPage/VendorRegistrationPage";
import { CustomerRegistrationPage } from "./pages/CustomerRegistrationPage/CustomerRegistrationPage";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  useEffect(() => {
    // window.location.pathname === "/" ? setHome(true) : setHome(false);
  });

  return (
    <>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/registration/vendor">
          <VendorRegistrationPage />
        </Route>
        <Route path="/registration/customer">
          <CustomerRegistrationPage />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
