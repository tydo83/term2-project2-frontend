import React, { useReduce, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

let history = createBrowserHistory();

const useStyle = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const classes = useStyle();
    const context = useContext(AuthContext);

    function logout() {
        localStorage.removeItem("jwtToken");
        context.dispatch({ type: "LOGGED_OUT" });
        history.push("/login");        
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="nav-link">
                            Covid19 Tracker
                        </Link>
                    </Typography>
                    {context.state.isAuth ? (
                        <>
                            <NavLink
                                to="/profile"
                                exact
                                className="nav-link"
                                activeClassName="active-nav-link"
                            >
                            <Button color="inherit">{context.state.user}</Button>
                            </NavLink>
                            <NavLink
                                to="/login"
                                exact
                                className="nav-link"
                                activeClassName="active-nav-link"
                            >
                                <Button color="inherit" onClick={logout}>
                                    Logout
                            </Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                exact
                                className="nav-link"
                                activeClassName="active-nav-link"
                            >
                                <Button color="inherit">Login</Button>
                            </NavLink>
                            <NavLink
                                to="/sign-up"
                                exact
                                className="nav-link"
                                activeClassName="active-nav-link"
                            >
                                <Button color="inherit">Sign up</Button>
                            </NavLink>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;