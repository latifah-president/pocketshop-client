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
import { CategoryDropdown } from "../../components/CategoryDropdown/CategoryDropdown";
import { BusinessBanner } from "../../containers/BusinessBanner/BusinessBanner";

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
    <div className="home-page">
      {/* <BusinessBanner></BusinessBanner> */}
      <div className="products-header">
        <div
          style={{
            backgroundImage:
              "url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/52692462_1018395905028239_7366818916456202240_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=pTMDztd9Ao0AX_X00OZ&_nc_ht=scontent-dfw5-1.xx&oh=9a8f3b15ad3301b36b863f70ff545ae7&oe=5EAE70C7)",
            backgroundSize: "cover",
            width: "200px",
            height: "200px"
          }}
        ></div>
        <div className="filter-tools">
          <SearchBar></SearchBar>
          <CategoryDropdown
            category={category}
            handleCategoryChange={handleCategoryChange}
          ></CategoryDropdown>
        </div>
      </div>
      <ProductsContainer></ProductsContainer>
    </div>
  );
};
