import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import {mainBtnColor} from "./../../global-styles/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    border: "1px solid #808080"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: "2rem auto 0 auto",
    width: "70%",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    backgroundColor: `${mainBtnColor}`,
    margin: "0 auto",
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "400",
    width: "80%",
    "&:hover": {
      backgroundColor: `${mainBtnColor}`,

    }
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
  },
  price: {
    marginTop: "1rem"
  }
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
export const ProductCard = ({ product }) => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();
  return (
    <Card square variant="outlined" className={classes.root}>
        <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.name}
      />
       <CardContent>
        <Typography variant="h5"  component="h5">
          {product.name}
        </Typography>
        <Typography  variant="caption" gutterBottom >
          {product.description}
        </Typography>
        <Typography variant="h5"  component="h6" className={classes.price}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="large" className={classes.button}>Add To Cart</Button>
      </CardActions>
    </Card>
    // <div className="product-card">
    //   <div className="product-details">
    //     {/* <img src={product.imageUrl} alt={product.name}></img> */}
    //     <div
    //       style={{
    //         width: "100%",
    //         height: "200px",
    //         backgroundImage: `url(${product.imageUrl})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center"
    //       }}
    //     ></div>
    //     <h2>{product.name}</h2>
    //     <p>{product.description}</p>
    //     <Box
    //       classes={{ root: classes.Rating }}
    //       component="fieldset"
    //       mb={3}
    //       borderColor="transparent"
    //     >
    //       {/* <Typography classes={{ root: classes.Rating }} component="legend">
    //         4.2/5.0
    //       </Typography> */}
    //       <Rating
    //         // classes={{ root: classes.numberRating }}
    //         name="read-only"
    //         value={4.28}
    //         readOnly
    //         size="small"
    //         precision={0.5}
    //       />
    //     </Box>
    //     <h2>{`$${product.price}`}</h2>
    //     <div className="add-to-cart-button">
    //       <Button variant="contained" color="primary">
    //         Add To Cart
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};
