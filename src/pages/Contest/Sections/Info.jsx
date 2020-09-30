import React from "react"
import { Paper, Typography } from "@material-ui/core"
import infoStyles from "styles/pages/contest/sections/info"

const Info = () => {
  const classes = infoStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.text} color="secondary">
          To win Sponsorship Summit Your
        </Typography>
        <Typography variant="h3" className={classes.text} color="primary">
          Slogan
        </Typography>
      </Paper>
    </>
  )
}

export default Info
