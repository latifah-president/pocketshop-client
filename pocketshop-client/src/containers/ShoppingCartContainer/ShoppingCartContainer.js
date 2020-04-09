import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { CartItemCard } from "../../components/CartItemCard/CartItemCard";

const cartItems = [
  {
    name: "apple",
    price: 2.0,
    quantity: 2,
    description: "first product",
    imageUrl:
      "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
  },
  {
    name: "watermelon",
    price: 2.0,
    quantity: 1,
    description: "second product",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._AC_SY450_.jpg",
  },
  {
    name: "pineapple",
    price: 2.0,
    quantity: 1,
    description: "third product",
    imageUrl:
      "https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg",
  },
  {
    name: "bananas",
    price: 3.0,
    quantity: 3,
    description: "fifth product",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg",
  },
  {
    name: "strawberries",
    price: 4.0,
    quantity: 1,
    description: "fourth product",
    imageUrl:
      "https://www.almanac.com/sites/default/files/image_nodes/strawberries-1.jpg",
  },
  //   {
  //     name: "bananas",
  //     price: 3.0,
  //     quantity: 2,
  //     description: "fifth product",
  //     imageUrl:
  //       "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg",
  //   },
];

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    // display: "grid",
    // gridTemplateColumns: "repeat(12, 1fr)",
    // gridGap: theme.spacing(3),
    boxSizing: "border-box",
    // maxWidth: "100vw",
    padding: "4vw",
    margin: "0",
    // border: "black 2px solid",
  },
  containerTitle: {
    maxHeight: "40px",
  },
  //   paper: {
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //     whiteSpace: "nowrap",
  //     marginBottom: theme.spacing(1),
  //   },
  //   divider: {
  //     margin: theme.spacing(2, 0),
  //   },
  numbers: {
    height: "1.5rem",
  },
  orderSummaryContainer: {
    // border: "blue 2px solid",
    display: "flex",
    flexDirection: "column",
    // justify: "center",
  },
  checkoutDetails: {
    marginTop: "4rem",
    // border: "cyan 2px solid",
    height: "24rem",
  },
  //   cartSummaryTableHeadContainer: {
  //     padding: "0",
  //     paddingLeft: "36px",
  //     paddingRight: "36px",
  //   },
  cartSummaryTableHeadProduct: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "left",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartSummaryTableHeadQuantity: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartSummaryTableHeadPrice: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "right",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartSummaryTitle: {
    border: "grey 1px solid",
    backgroundColor: "#DCDCDC",
  },
  cartItemCardContainer: {
    boxSizing: "border-box",
    padding: "0px",
    // display: "flex",
  },
}));

const calculateTotal = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  //   setSubtotal(total);
  //   console.log(subtotal);
  const tax = total * 0.0825;
  //   setSalesTax(tax);
  //   console.log(salesTax);
  //   setCheckoutTotal(subtotal + salesTax);
  //   console.log(checkoutTotal);
  const checkoutTotal = total + tax + 5;
  const checkout = [
    { name: "Subtotal", value: total },
    { name: "Delivery", value: 5 },
    { name: "Sales Tax", value: tax },
    { name: "Total", value: checkoutTotal },
  ];
  //   setCheckoutDetails(checkout);
  console.log(checkout);
  return checkout;
};

export const ShoppingCartContainer = () => {
  const classes = useStyles();
  const [checkoutDetails, setCheckoutDetails] = useState([]);

  useEffect(() => {
    setCheckoutDetails(calculateTotal());
  }, []);

  return (
    <Grid
      className={classes.cartContainer}
      container
      justify="center"
      spacing={8}
    >
      <Grid container item xs={8} spacing={3}>
        <Grid item className={classes.cartSummaryTitle} xs={12}>
          <Typography variant="h4" gutterBottom>
            Shopping Cart Review
          </Typography>
        </Grid>

        <Grid container className={classes.cartSummaryTableHeadContainer} item>
          <Grid item className={classes.cartSummaryTableHeadProduct} xs={6}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
          </Grid>
          <Grid item className={classes.cartSummaryTableHeadQuantity} xs={3}>
            <Typography variant="h6" gutterBottom>
              Quantity
            </Typography>
          </Grid>
          <Grid item className={classes.cartSummaryTableHeadPrice} xs={3}>
            <Typography variant="h6" gutterBottom>
              Price
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.cartItemCardContainer} item xs={12}>
          {cartItems.map((item) => (
            <CartItemCard item={item}></CartItemCard>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.orderSummaryContainer}
        item
        xs={4}
        // direction="column"
        // alignItems="center"
        // justify="center"
        // spacing={3}
        spacing={3}
      >
        <Typography className={classes.containerTitle} variant="h4">
          Order Summary
        </Typography>
        <Grid item container className={classes.checkoutDetails}>
          {checkoutDetails.map((item) => (
            <Grid
              container
              className={classes.checkoutDetail}
              style={{ height: "12px", padding: "0" }}
            >
              <Grid item className={classes.checkoutDetailName} xs={7}>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid item className={classes.checkoutDetailValue} xs={5}>
                <Typography>{`$${item.value}`}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
