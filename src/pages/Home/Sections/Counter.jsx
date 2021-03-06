import React, { useState } from "react"
import { useTimer } from "hooks"
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike"
import { Typography, Paper, CircularProgress, Box } from "@material-ui/core"
import counterStyles from "styles/pages/home/sections/counterStyles"

const Counter = () => {
  const classes = counterStyles()
  const [date] = useState("10-22-2020, 4:57 pm")

  const { days, hours, minutes, seconds } = useTimer(date)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper1} elevation={6} color="primary">
        <div>
          <Typography variant="h4" className={classes.title}>
            Welcome To Builder Bike Tour
          </Typography>
          <div className={classes.count}>
            <div className={classes.countdownItem}>
              <Box className={classes.countdownItem}>
                <CircularProgress size="120" variant="static" value={days} />
                <Box className={classes.box}>
                  <div className={classes.countdownItem}>
                    <Typography variant="h4" color="secondary">
                      {days}
                    </Typography>
                    <span>
                      <Typography color="secondary">days</Typography>
                    </span>
                  </div>
                </Box>
              </Box>
            </div>

            <div className={classes.countdownItem}>
              <Box className={classes.countdownItem}>
                <CircularProgress
                  size="120"
                  variant="static"
                  value={hours * 4.166}
                />
                <Box className={classes.box}>
                  <div className={classes.countdownItem}>
                    <Typography variant="h4" color="secondary">
                      {hours}
                    </Typography>
                    <span>
                      <Typography color="secondary">hours</Typography>
                    </span>
                  </div>
                </Box>
              </Box>
            </div>

            <div className={classes.countdownItem}>
              <Box className={classes.countdownItem}>
                <CircularProgress
                  size="120"
                  variant="static"
                  value={minutes * 1.66}
                />
                <Box className={classes.box}>
                  <div className={classes.countdownItem}>
                    <Typography variant="h4" color="secondary">
                      {minutes}
                    </Typography>
                    <span>
                      <Typography color="secondary">minutes</Typography>
                    </span>
                  </div>
                </Box>
              </Box>
            </div>

            <div className={classes.countdownItem}>
              <Box>
                <CircularProgress
                  size="120"
                  variant="static"
                  value={seconds * 1.66}
                  color="primary"
                />
                <Box className={classes.box}>
                  <div className={classes.countdownItem}>
                    <Typography variant="h4" color="secondary">
                      {seconds}
                    </Typography>
                    <span>
                      <Typography color="secondary">seconds</Typography>
                    </span>
                  </div>
                </Box>
              </Box>
            </div>
          </div>
        </div>

        <Typography className={classes.title} variant="h6" noWrap>
          TOGO
          <span className={classes.icon}>
            {" "}
            <DirectionsBikeIcon />
          </span>
        </Typography>
      </Paper>
    </div>
  )
}

export default Counter
