import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  orderSummaryContainerTitle: {
    maxHeight: "40px",
    padding: "2rem",
    fontWeight: "bold",
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
    borderTop: "#C0C0C0 1px solid",
    display: "flex",
    // boxSizing: "border-box",
    flexDirection: "column",
    padding: "0",
    margin: "0",
    // justify: "center",
  },
  orderSummaryDetails: {
    marginTop: "4rem",
    // border: "cyan 2px solid",
    height: "24rem",
    // padding: "2rem",
  },
  orderSummaryDetail: {
    height: "12px",
    padding: "2rem",
  },
  orderSummaryName: {
    fontWeight: "bold",
    textAlign: "left",
  },
  orderSummaryValue: {
    fontWeight: "bold",
    textAlign: "right",
  },
  //   cartReviewTableHeadContainer: {
  //     padding: "0",
  //     paddingLeft: "36px",
  //     paddingRight: "36px",
  //   },
  cartReviewContainer: {
    // borderTop: "1px #C0C0C0 solid",
    borderRight: "1px #C0C0C0 solid",
    padding: "0",
    margin: "0",
  },
  cartReviewTableHeadProduct: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "left",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartReviewTableHeadQuantity: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartReviewTableHeadPrice: {
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "right",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cartReviewTitle: {
    border: "#C0C0C0 1px solid",
    backgroundColor: "#DCDCDC",
    borderSizing: "border-box",
  },
  cartItemCardContainer: {
    boxSizing: "border-box",
    padding: "0px",
    // display: "flex",
  },
  cartReviewTableHeadTypography: {
    fontWeight: "bold",
  },
  button: {
    width: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
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
  //   setorderSummaryDetails(checkout);
  console.log(checkout);
  return checkout;
};

export const ShoppingCartContainer = () => {
  const classes = useStyles();
  const [orderSummaryDetails, setorderSummaryDetails] = useState([]);

  useEffect(() => {
    setorderSummaryDetails(calculateTotal());
  }, []);

  return (
    <Grid
      className={classes.cartContainer}
      container
      justify="center"
      //   spacing={8}
    >
      <Grid
        container
        item
        className={classes.cartReviewContainer}
        xs={8}
        spacing={3}
      >
        <Grid item className={classes.cartReviewTitle} xs={12}>
          <Typography variant="h4" gutterBottom>
            Shopping Cart Review
          </Typography>
        </Grid>

        <Grid container className={classes.cartReviewTableHeadContainer} item>
          <Grid item className={classes.cartReviewTableHeadProduct} xs={6}>
            <Typography
              className={classes.cartReviewTableHeadTypography}
              variant="h6"
              gutterBottom
            >
              Product
            </Typography>
          </Grid>
          <Grid item className={classes.cartReviewTableHeadQuantity} xs={3}>
            <Typography
              className={classes.cartReviewTableHeadTypography}
              variant="h6"
              gutterBottom
            >
              Quantity
            </Typography>
          </Grid>
          <Grid item className={classes.cartReviewTableHeadPrice} xs={3}>
            <Typography
              className={classes.cartReviewTableHeadTypography}
              variant="h6"
              gutterBottom
            >
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
        <Typography className={classes.orderSummaryContainerTitle} variant="h4">
          Order Summary
        </Typography>
        <Grid item container className={classes.orderSummaryDetails}>
          {orderSummaryDetails.map((item) => (
            <Grid
              container
              className={classes.orderSummaryDetail}
              //   style={{ height: "12px", padding: "100px" }}
            >
              <Grid item xs={7}>
                <Typography className={classes.orderSummaryName}>
                  {item.name}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  className={classes.orderSummaryValue}
                >{`$${item.value.toFixed(2)}`}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Button className={classes.button} variant="contained" color="primary">
          Check out
        </Button>
      </Grid>
    </Grid>
  );
};
