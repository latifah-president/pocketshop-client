import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { blue } from "@material-ui/core/colors";

import { ProductCard } from "../../components/ProductCard/ProductCard";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ProductsContainer } from "../../containers/ProductsContainer/ProductsContainer";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    height: "3ch"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const HomePage = () => {
  const classes = useStyles();

  const [category, setCategory] = useState("all");
  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };
  console.log(category);

  return (
    <div>
      <div className="business-info-bar">
        <div className="business-logo"></div>
      </div>
      <div className="products-header">
        <SearchBar></SearchBar>
        <div className="dropdown">
          <select
            name="categories"
            className="dropdown-menu"
            label="categories"
            style={
              category === "all" ? { fontStyle: "italic", color: "grey" } : null
            }
            onChange={handleCategoryChange}
          >
            <option className="dropdown-label" value="none">
              Select a category...
            </option>
            <option className="dropdown-options" value="food">
              Food
            </option>
            <option className="dropdown-options" value="drug">
              Drug
            </option>
            <option className="dropdown-options" value="toiletry">
              Toiletry
            </option>
          </select>
        </div>
        <Button variant="contained" color="primary">
          <ShoppingCartIcon color="default"></ShoppingCartIcon>
          <span> $0.00 </span>
        </Button>
      </div>
      <ProductsContainer></ProductsContainer>
    </div>
  );
};
