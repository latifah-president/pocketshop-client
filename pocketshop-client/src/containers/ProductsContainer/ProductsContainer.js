import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import "./styles.css";

const products = [
  {
    name: "apple",
    price: 2.0,
    description: "first product",
    imageUrl:
      "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
  },
  {
    name: "watermelon",
    price: 2.0,
    description: "second product",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._AC_SY450_.jpg",
  },
  {
    name: "pineapple",
    price: 2.0,
    description: "third product",
    imageUrl:
      "https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg",
  },
  {
    name: "bananas",
    price: 3.0,
    description: "fifth product",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg",
  },
  {
    name: "strawberries",
    price: 4.0,
    description: "fourth product",
    imageUrl:
      "https://www.almanac.com/sites/default/files/image_nodes/strawberries-1.jpg",
  },
  {
    name: "bananas",
    price: 3.0,
    description: "fifth product",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "center",
    height: "auto",
    flexGrow: 1,
  },
  gridList: {
    alignItems: "center",
    width: "90%",
    // flexWrap: 'wrap',
    // width: 500,
    // [theme.breakpoints.down('md')]: {
    //   width: "100%",
    // }
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridListTile: {
    margin: "1rem auto",
    width: "10%",
    justifyContent: "space-between",
    maxWidth: 270,
  },
}));

// Material UI breakpoints
// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

const ProductsContainer = (props) => {
  const classes = useStyles();
  console.log("width", props.width);
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 5;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }
    if (isWidthUp("sm", props.width)) {
      return 2;
    }
    return 1;
  };
  return (
    <Grid container spacing={2} className={classes.root}>
      <GridList
        cols={getGridListCols()}
        cellHeight={380}
        className={classes.gridList}
      >
        {products.map((product) => (
          <GridListTile className={classes.gridListTile}>
            <ProductCard
              product={product}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
            ></ProductCard>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
};

export default withWidth()(ProductsContainer);
