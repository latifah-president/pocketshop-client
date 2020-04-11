import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderTop: "grey 1px dotted",
    width: "100%",
  },
  card: {
    margin: "0",
  },
  paper: {
    padding: theme.spacing(2),
    // width: "100%",
    // display: "flex",
    // margin: "0",
    // margin: "auto",
    // maxWidth: 500,
  },
  image: {
    width: "100%",
    // height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cartItemCard: {
    width: "100%",
  },
  quantityDropdown: {
    // height: "2.5rem",
    // width: "4rem",
    // paddingRight: "24px",
  },
  quantity: {
    textAlign: "center",
  },
  price: {
    textAlign: "right",
  },
  priceTypography: {
    fontWeight: "bold",
  },
}));

export const CartItemCard = ({ item }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container className={classes.card} xs={12} spacing={3}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={item.imageUrl}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={9} sm container>
              <Grid item xs={4} container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                </Grid>
                <Grid container item direction="row">
                  <Typography
                    variant="body2"
                    style={{
                      cursor: "pointer",
                      marginRight: "20px",
                      color: "rgb(67, 164, 224)",
                    }}
                  >
                    Add a note
                  </Typography>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.quantity} xs={4}>
                {/* <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    className={classes.quantityDropdown}
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <MenuItem value={i}>{i}</MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <FormControl className={classes.formControl}>
                  <Select
                    className={classes.quantityDropdown}
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <MenuItem value={i}>{i}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className={classes.price} xs={4}>
                <Typography
                  className={classes.priceTypography}
                  variant="subtitle1"
                >{`$${item.price.toFixed(2)}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* <Grid item xs={4}>
        Something
      </Grid> */}
    </Grid>
  );
};
