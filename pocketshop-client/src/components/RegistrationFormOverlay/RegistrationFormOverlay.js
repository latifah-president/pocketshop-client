import React from "react";
import Button from "@material-ui/core/Button";

import "./styles.css";

export const RegistrationFormOverlay = () => (
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const container = document.getElementById("container");
            container.classList.remove("right-panel-active");
          }}
          className="ghost"
          id="signIn"
        >
          Sign In
        </Button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const container = document.getElementById("container");
            container.classList.add("right-panel-active");
          }}
          // className="ghost"
          id="signUp"
        >
          Sign Up
        </Button>
      </div>
    </div>
  </div>
);
