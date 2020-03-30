import React from "react";
import Button from "@material-ui/core/Button";

export const SignUpForm = ({ error, handleErrors, handleSubmit }) => (
  <div className="form-container sign-up-container">
    <form id={"sign-up__form"}>
      <h1 className="font-bold m-0">Create Account</h1>
      <button
        className="rounded-xxl border border-light-blue bg-dark-blue text-white cursor-pointer text-xs font-bold py-3 px-12 tracking-wide uppercase ease-in duration-75"
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-up__form");
        }}
      >
        Sign Up
      </button>
    </form>
  </div>
);

export const SignInForm = ({ error, handleErrors, handleSubmit }) => (
  <div className="form-container sign-in-container">
    <form id={"sign-in__form"}>
      <h1 className="font-bold m-0">Sign in</h1>
      <button
        className="rounded-xxl border border-light-blue bg-dark-blue text-white cursor-pointer text-xs font-bold py-3 px-12 tracking-wide uppercase ease-in duration-75"
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-in__form");
        }}
      >
        Sign In
      </button>
    </form>
  </div>
);
