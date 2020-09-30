import React from "react";
import {
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
}));

const DiaLog = (prop) => {
  const classes = useStyles();
  const { open, image, handleClose, message } = prop;

  return (
    <>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "#424242",
          },
        }}
      >
        {image ? (
          <div className={classes.form}>
            <img src={image} alt="..." />
          </div>
        ) : (
          <>
            <DialogContent>
              <DialogContentText color="secondary">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                ok
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};
export default DiaLog;
