import React from "react";
import { makeStyles, Dialog } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
}));

const DiaLog = (prop) => {
  const classes = useStyles();
  const { open, image, handleClose } = prop;

  return (
    <>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <div className={classes.form}>
          <img src={image} alt="..." />
        </div>
      </Dialog>
    </>
  );
};
export default DiaLog;
