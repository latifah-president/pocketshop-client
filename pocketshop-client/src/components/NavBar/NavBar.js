import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { auth } from "./../../firebaseconfig";
import {useDispatch, useSelector} from "react-redux"
import { withRouter, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {GreenRadient} from "./../../global-styles/styles"
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: `${GreenRadient}`
  },
  icon: {
    color: "white",
    fontSize: "2rem"
  }
}));
const NavBar = (props) => {
  const classes = useStyles();
  const user_type = useSelector(state => state.user.user_type);
  const firebase_id = useSelector(state => state.user.firebase_id);

  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  }
  

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="fixed">
        <Toolbar>
        
          <Typography variant="h4" className={classes.title}>
            3rd Eye
          </Typography>
          <button onClick={logout}>
            log out
          </button>
          <IconButton
              edge="start"
              aria-label="profile"
              // aria-controls={menuId}
              // aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <NavLink to={user_type === "vendor" ? `/vendor/${firebase_id}` : `/customer/${firebase_id}`}>
                <AccountCircle  className={classes.icon}/>
              </NavLink>
            </IconButton>
            <IconButton
              edge="start"
              aria-label="user settings"
              // aria-controls={menuId}
              // aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <HelpOutlineIcon className={classes.icon}/>
            </IconButton>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
    // <div>
    //   <nav>
    //     <ul>
    //       <Link to="/" className="business-title">
    //         <li>3rd Eye Mediation</li>
    //       </Link>
    //       <Link to="/cart" className="shopping-cart-icon">
    //         <Button variant="contained" color="primary">
    //           <ShoppingCartIcon color="default"></ShoppingCartIcon>
    //           <span> $0.00 </span>
    //         </Button>
    //       </Link>
    //       <button onClick={logout}>
    //         log out
    //       </button>
    //     </ul>
    //   </nav>
    // </div>
  
};

export default withRouter(NavBar);
