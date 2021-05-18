import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: grey[200],
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <Hidden mdUp>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Hidden>
  );
};

export default BottomNav;
