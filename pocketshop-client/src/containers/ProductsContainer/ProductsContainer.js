import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Grid from '@material-ui/core/Grid';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    height: 850,
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  gridList: {
    alignItems: "center",
    width: "90%",
    // width: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  // gridListTile: {
    
  // }
}));

export const ProductsContainer = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root} >
       <GridList cols={4} cellHeight={380} className={classes.gridList}>
      {products.map(product => (
        <GridListTile  >
          <ProductCard product={product}></ProductCard>
        </GridListTile>
      ))}
      </GridList>
    </Grid>
  );
};
