import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { VendorRegistration } from "./containers/Registration/VendorRegistration";
import { CustomerRegistration } from "./containers/Registration/CustomerRegistration";
import { Products } from "./containers/Products/Products";
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
          {/* <Home /> */}
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/registration/vendor">
          <VendorRegistration />
        </Route>
        <Route path="/registration/customer">
          <CustomerRegistration />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
