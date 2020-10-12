import React from "react"
import PropTypes from "prop-types"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import loadingStyles from "styles/components/loading"

const Loading = (props) => {
  const classes = loadingStyles()
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
