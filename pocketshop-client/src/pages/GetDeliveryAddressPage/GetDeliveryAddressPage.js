import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Map from "../../components/Map/Map";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      //   alignItems: "center",
      //   justifyContent: "center",
      marginTop: "80px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "30ch",
    },
  },
  input: {
    marginTop: "20px",
    // width: "fullwidth",
  },
}));
export const GetDeliveryAddressPage = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography>Where do you want the order delivered?</Typography>
        <TextField
          className={classes.input}
          fullWidth
          id="outlined-basic"
          label="Delivery Address..."
          variant="outlined"
        />
      </form>
      <Map
        // google={this.props.google}
        center={{ lat: 30.292352, lng: -97.741009 }}
        height="300px"
        zoom={10}
      ></Map>
    </div>
  );
};
