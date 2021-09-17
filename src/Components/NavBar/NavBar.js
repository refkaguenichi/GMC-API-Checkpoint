import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "lightBlue",
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "&:hover": {
      color: "",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            <Link
              to="/"
              className={classes.menuButton}
              style={{ display: "flex", alignItems: "center" }}
            >
              <EmojiFoodBeverageOutlinedIcon fontSize="large" />
              Drinks shop
            </Link>
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">
              <Link to="/" className={classes.menuButton}>
                <HomeIcon style={{ color: "white" }} fontSize="large" />
                {/* Home */}
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/about" className={classes.menuButton}>
                About us
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/cocktails" className={classes.menuButton}>
                Cocktails
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
