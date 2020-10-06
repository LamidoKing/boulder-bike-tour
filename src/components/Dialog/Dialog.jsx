import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  makeStyles,
  useTheme,
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
  const theme = useTheme();
  const { open, image, handleClose, message, Component } = prop;
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

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
        fullScreen={Component && fullScreen}
      >
        {image && (
          <div className={classes.form}>
            <img src={image} alt="..." />
          </div>
        )}
        {message && (
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
        {Component && Component}
      </Dialog>
    </>
  );
};
export default DiaLog;
