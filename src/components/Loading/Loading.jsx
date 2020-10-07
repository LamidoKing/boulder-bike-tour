import React from "react"
import PropTypes from "prop-types"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  topMargin: {
    marginTop: "64px",
    "@media (max-width: 576px)": {
      marginTop: "30px",
    },
  },
}))

const Loading = (props) => {
  const classes = useStyles()
  const { status, top } = props
  const mTop = top ? classes.topMargin : ""

  return (
    <div>
      <Backdrop
        className={classes.backdrop + mTop}
        open={status === "fetching"}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

Loading.defaultProps = {
  status: "",
  top: false,
}

Loading.propTypes = {
  status: PropTypes.string,
  top: PropTypes.bool,
}

export default Loading
