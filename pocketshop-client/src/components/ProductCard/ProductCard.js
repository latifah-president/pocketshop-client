import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./styles.css";

const useStyles = makeStyles({
  rating: {
    padding: "0px",
    margin: "0px",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "0px",
    paddingInlineEnd: "0px",
    paddingBlockStart: "0px",
    paddingBlockEnd: "0px",
    border: "none"
  },
  Rating: {
    padding: "0px",
    margin: "0px",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "0px",
    paddingInlineEnd: "0px",
    paddingBlockStart: "0px",
    paddingBlockEnd: "0px",
    border: "none"
  }
});

export const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <div className="product-card">
      <div className="product-details">
        {/* <img src={product.imageUrl} alt={product.name}></img> */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Box
          classes={{ root: classes.Rating }}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          {/* <Typography classes={{ root: classes.Rating }} component="legend">
            4.2/5.0
          </Typography> */}
          <Rating
            // classes={{ root: classes.numberRating }}
            name="read-only"
            value={4.28}
            readOnly
            size="small"
            precision={0.5}
          />
        </Box>
        <h2>{`$${product.price}`}</h2>
        <div className="add-to-cart-button">
          <Button variant="contained" color="primary">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
