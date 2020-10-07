import React from "react"
import PropTypes from "prop-types"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  makeStyles,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core"

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
}))

const DiaLog = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const {
    open,
    image,
    handleClose,
    message,
    errorMessage,
    handleRefresh,
    Component,
  } = props
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))

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
              <Button color="secondary" onClick={handleClose}>
                ok
              </Button>
            </DialogActions>
          </>
        )}
        {errorMessage && (
          <>
            <DialogContent>
              <DialogContentText color="secondary">
                {errorMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={handleRefresh}>
                refresh
              </Button>
              <Button color="secondary" onClick={handleClose}>
                cancel
              </Button>
            </DialogActions>
          </>
        )}
        {Component && Component}
      </Dialog>
    </>
  )
}

DiaLog.defaultProps = {
  open: false,
  image: null,
  handleClose: () => {},
  message: null,
  errorMessage: null,
  handleRefresh: () => {},
  Component: null,
}

DiaLog.propTypes = {
  open: PropTypes.bool,
  image: PropTypes.string,
  handleClose: PropTypes.func,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  handleRefresh: PropTypes.func,
  Component: PropTypes.node,
}
export default DiaLog
