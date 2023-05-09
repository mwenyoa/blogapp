import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import useStyles from "../Styles";
import { useAuth } from "./Auth/ProtectedRoutes";
import { LogoutUser } from "../Redux/Services/User";


type Props = {};

const Nav = (props: Props) => {
  const classes = useStyles();
  const user = useAuth();
  return (
    <header className={classes.navbar}>
      <CssBaseline />
      <AppBar position="static" className={ classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Blog App
            </Link>
          </Typography>
          <nav>
            {user ? (
              <>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <Link to="/Post" className={classes.link}>
                  Add Post
                </Link>
                <Button className={classes.link} onClick={LogoutUser}>Log Out</Button>
              </>
            ) : (
              <>
                <Link to="/register" className={classes.link}>
                  Register
                </Link>
                <Link to="/Login" className={classes.link}>
                  Log In
                </Link>
              </>
            )}
          </nav>
        </Toolbar>
      </AppBar>
      </header>
  );
};

export default Nav;
