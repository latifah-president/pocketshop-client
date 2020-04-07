import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {auth} from "./../../firebaseconfig";
import { withRouter } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./styles.css";

const NavBar = (props) => {
  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  }
  return (
    <div>
      <nav>
        <ul>
          <Link to="/" className="business-title">
            <li>3rd Eye Mediation</li>
          </Link>
          <Link to="/cart" className="shopping-cart-icon">
            <Button variant="contained" color="primary">
              <ShoppingCartIcon color="default"></ShoppingCartIcon>
              <span> $0.00 </span>
            </Button>
          </Link>
          <button onClick={logout}>
            log out
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(NavBar)