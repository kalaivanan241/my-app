import { Typography } from "@material-ui/core";
import React from "react";
import DialogBox from "./../DialogBox/DialogBox";
import Button from "@material-ui/core/Button";

export interface ConfirmDialogProps {
  showDialog: boolean;
  title?: string;
  content?: string;
  confirmActionName?: string;
  cancelActionName?: string;
  confirmAction: () => void;
  cancelAction: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  confirmActionName,
  cancelActionName,
  cancelAction,
  confirmAction,
  content,
  ...rest
}) => {
  const renderActions = () => {
    return (
      <>
        <Button onClick={confirmAction} variant="outlined" color="secondary">
          {confirmActionName ? confirmActionName : "Yes"}
        </Button>
        <Button onClick={cancelAction} variant="contained" color="primary">
          {cancelActionName ? cancelActionName : "No"}
        </Button>
      </>
    );
  };

  return (
    <DialogBox handleClose={cancelAction} action={renderActions()} {...rest}>
      <Typography>{content}</Typography>
    </DialogBox>
  );
};

export default ConfirmDialog;
