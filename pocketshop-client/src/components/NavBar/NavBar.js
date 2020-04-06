import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./styles.css";

export const NavBar = () => {
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
        </ul>
      </nav>
    </div>
  );
};
