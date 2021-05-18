import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  closeButton: {
    textAlign: "end",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

interface NavListProps {
  onClose: () => void;
}

const NavList: React.FC<NavListProps> = ({ onClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.list} role="presentation">
      <div className={classes.closeButton}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={() => onClose()}
        >
          <CancelIcon />
        </IconButton>
      </div>

      <List>
        <ListItem button key={"Todo List"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Todo List"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default NavList;
