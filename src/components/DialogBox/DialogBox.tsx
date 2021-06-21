import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface DialogBox {
  showDialog: boolean;
  handleClose: () => void;
  title?: string;
  action?: React.ReactNode;
}

const DialogBox: React.FC<DialogBox> = ({
  showDialog,
  handleClose,
  title,
  children,
  action,
}) => {
  return (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      {children && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
      )}
      {action && <DialogActions>{action}</DialogActions>}
    </Dialog>
  );
};

export default DialogBox;
