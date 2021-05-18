import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { ServiceWorkerContext } from "./ServiceWorkerProvider/contect";

const HandleUpdate: React.FC = () => {
  const { updateAvailable } = useContext(ServiceWorkerContext);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  useEffect(() => {
    if (updateAvailable) {
      setShowDialog(true);
    }
  }, [updateAvailable]);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleLoad = () => {
    window.location.reload();
    setShowDialog(true);
  };

  return (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Disagree
        </Button>
        <Button onClick={handleLoad} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HandleUpdate;
