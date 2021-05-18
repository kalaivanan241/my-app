import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import NavList from "../NavList/NavList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setShowDrawer((prevVal) => !prevVal)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Kalai POS</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} anchor="left">
        <NavList onClose={() => setShowDrawer((prevVal) => !prevVal)} />
      </Drawer>
    </>
  );
};

export default NavBar;
