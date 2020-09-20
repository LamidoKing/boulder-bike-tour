import React from "react"
import { Typography, Paper, Button } from "@material-ui/core"
import contestInfoStyles from "styles/pages/home/sections/contestInfoStyles"

const ContestInfo = () => {
  const classes = contestInfoStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper2} elevation={6} color="primary">
        <div>
          <Typography variant="h4" color="white" className={classes.title}>
            Contest !
          </Typography>
        </div>
        <div>
          <Typography variant="h6" color="white" className={classes.text}>
            The Organizers are sponsoring or anyone to come up with a slogon for
            the race
          </Typography>
        </div>
        <div className={classes.center}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.button}
          >
            summit slogoan
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default ContestInfo
