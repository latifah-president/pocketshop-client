import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { blue } from "@material-ui/core/colors";

import { ProductCard } from "./ProductCard";

import { SearchBar } from "./SearchBar";

import "./styles.css";

const products = [
  {
    name: "apple",
    price: 2.0,
    description: "first product",
    imageUrl:
      "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg"
  },
  {
    name: "watermelon",
    price: 2.0,
    description: "second product",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._AC_SY450_.jpg"
  },
  {
    name: "pineapple",
    price: 2.0,
    description: "third product",
    imageUrl:
      "https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg"
  },
  {
    name: "strawberries",
    price: 4.0,
    description: "fourth product",
    imageUrl:
      "https://www.almanac.com/sites/default/files/image_nodes/strawberries-1.jpg"
  },
  {
    name: "bananas",
    price: 3.0,
    description: "fifth product",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg"
  }
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    height: "3ch"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const Products = () => {
  const classes = useStyles();

  const [category, setCategory] = useState("all");
  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };
  console.log(category);

  return (
    <div>
      <div className="products-header">
        <SearchBar></SearchBar>
        {/* <FormControl className={classes.formControl} variant="outlined">
          <InputLabel className={classes.formControl}>Categories</InputLabel>
          <Select
            className={classes.formControl}
            value={category}
            onChange={handleCategoryChange}
            // input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
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
      <div className="grid-cols-4">
        {products.map(product => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
