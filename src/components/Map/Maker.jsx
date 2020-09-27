import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import image from "assets/img/maker.jpg";
import mapStyles from "styles/components/mapStyles";

const Makers = (props) => {
  const classes = mapStyles();
  const [open, setOpen] = useState(false);
  const { location } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#f44336",
            borderRadius: "30px",
          },
        }}
      >
        <div className={classes.align}>
          <img src={image} alt="" className={classes.dialogImg} />
        </div>

        <DialogContent>
          <DialogTitle
            id="alert-dialog-title"
            className={classes.align}
          >{`Name: ${location.first_name} ${location.last_name}`}</DialogTitle>
          <DialogTitle
            id="alert-dialog-title"
            className={classes.align}
          >{`City of Origin: ${location.city_of_origin}`}</DialogTitle>
          <DialogTitle
            id="alert-dialog-title"
            className={classes.align}
          >{`State of origin: ${location.state_of_origin}`}</DialogTitle>
        </DialogContent>
      </Dialog>

      <img
        src={image}
        alt=""
        className={classes.marker}
        onClick={handleClickOpen}
      />
    </div>
  );
};

Makers.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Makers;
