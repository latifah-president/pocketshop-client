import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { auth } from "./../../firebaseconfig";
import {useSelector} from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MoreIcon from '@material-ui/icons/MoreVert';
import {GreenRadient} from "./../../global-styles/styles";
import "./styles.css";
import Grid  from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  nav: {
    backgroundColor: `${GreenRadient}`
  },
  toolBar: {
    display: "flex",
    // border: "1px solid blue",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  icons: {
    // border: "1px solid red",    
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down('sm')]: {
    //   border: "2px solid red",
    //   flexBasis: "0"
    // }
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      // border: " 1px solid red"
    },
  },
  icon: {
    color: "white",
    fontSize: "2rem"
  }, 
  link: {
    color: "black"
  },
  btn: {
    color: "white",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    
},
hide: {
  display: "none",
}, 
whiteLink: {
  color: "white"
},
sectionMobile: {
  display: 'flex',
  [theme.breakpoints.up('md')]: { //do something when the screen reached 960px and up equivalent to max-width media query
    display: 'none',
  },
},
}));

const NavBar = (props) => {
  const classes = useStyles();
  const loggedIn = useSelector(state => state.user.loggedIn);
  const user_type = useSelector(state => state.user.user_type);
  const firebase_id = useSelector(state => state.user.firebase_id);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const vendor_name = localStorage.getItem("vendor_name")
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const logout = () => {
    auth.signOut();
    props.history.push(`/${vendor_name}`);
  }
  
  const profile = () => {

  }
  const menuId = 'profile';
console.log("is logged in?", loggedIn)
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right"}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
       <MenuItem onClick={handleMenuClose}>
         <NavLink className={classes.link} to={user_type === "vendor" ? `/vendor/${firebase_id}` : `/customer/${firebase_id}`}>
            Profile
         </NavLink>
         </MenuItem>
        <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'profile-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem className={loggedIn === true ? `${classes.hide} ` : null}>
        {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton> */}
        <p>Register</p>
      </MenuItem >
      <MenuItem className={loggedIn === true ? `${classes.hide} ` : null}> 
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p>Login</p>
      </MenuItem>
      
      <MenuItem className={loggedIn === true ? null : `${classes.hide} `} onClick={handleProfileMenuOpen}>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Profile</p>
      </MenuItem>
      <MenuItem className={loggedIn === true ? null : `${classes.hide} `}>
      <p>My Orders</p>
    </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="fixed">
        <Toolbar className={classes.toolBar}>
          <NavLink to={`/${vendor_name}`} className={classes.title}>
            <Typography variant="h4" >
                3rd Eye
            </Typography>
          </NavLink>
          <Grid className={loggedIn ? `${classes.icons}` : `${classes.hide}`}  xs={2}>
             <IconButton
                aria-label="profile"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
            >
              <AccountCircle  className={classes.icon}/>
            </IconButton>
            <IconButton
              aria-label="user settings"
            >
              <HelpOutlineIcon className={classes.icon}/>
            </IconButton>
            <IconButton
              aria-label="logout"
              onClick={logout}
            >
              <ExitToAppIcon className={classes.icon}/>
            </IconButton> 
          </Grid>   
          <Grid className={loggedIn ? `${classes.hide}` : `${classes.icons}`} xs={"auto"}>
            <Button className={classes.btn} color="inherit"><NavLink className={classes.whiteLink} to="/registration/customer">Register</NavLink></Button>
            <Button className={classes.btn} color="inherit">Login</Button>
            <Button onClick={logout}>Log Out </Button>
          </Grid> 
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>        
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  )
};

export default withRouter(NavBar);
