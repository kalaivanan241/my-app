import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
} from "@material-ui/core";

import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import React from "react";
import { grey } from "@material-ui/core/colors";
import { baseUrl, todoListUrl, savingUrl } from "../../app/paths";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    position: "sticky",
  },
  container: {
    maxWidth: 500,
    margin: "auto",
    position: "sticky",
    bottom: 0,
  },
  bottomNav: {
    backgroundColor: grey[200],
  },
});

type BottomNavOptionType = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

const bottomNavOptions: BottomNavOptionType[] = [
  {
    path: baseUrl,
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    path: todoListUrl,
    label: "Todo",
    icon: <ListAltIcon />,
  },
  {
    path: savingUrl,
    label: "Savings",
    icon: <AccountBalanceWalletIcon />,
  },
];

const BottomNav = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <Hidden mdUp>
      <div className={classes.root}>
        <div className={classes.container}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              history.push(bottomNavOptions[newValue].path);
            }}
            className={classes.bottomNav}
            showLabels
          >
            {bottomNavOptions.map((option, index) => {
              return (
                <BottomNavigationAction
                  label={option.label}
                  icon={option.icon}
                  key={index}
                />
              );
            })}
          </BottomNavigation>
        </div>
      </div>
    </Hidden>
  );
};

export default BottomNav;
