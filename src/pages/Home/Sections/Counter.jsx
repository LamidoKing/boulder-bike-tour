import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike"
import {
  Typography,
  Paper,
  CircularProgress,
  Box,
  IconButton,
} from "@material-ui/core"
import counterStyles from "styles/pages/home/sections/counterStyles"

const Counter = (props) => {
  const { date } = props
  const classes = counterStyles()
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  useEffect(() => {
    const interval = () =>
      setInterval(() => {
        const timeFormat = "MM-DD-YYYY, h:mm a"
        const then = moment(date, timeFormat).format("X")
        const now = moment().format("X")
        const countdown = moment(then - now)

        setDays(parseInt(countdown / (60 * 60 * 24), 10))
        setHours(parseInt((countdown % (60 * 60 * 24)) / (60 * 60), 10))
        setMinutes(parseInt((countdown % (60 * 60)) / 60, 10))
        setSeconds(parseInt(countdown % 60, 10))
      }, 1000)

    interval()

    return () => {
      clearInterval(interval())
    }
  }, [date])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper1} elevation={6} color="primary">
        <div>
          <Typography variant="h4" color="white" className={classes.title}>
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
          <IconButton className={classes.icon}>
            <DirectionsBikeIcon fontSize="large" />
          </IconButton>
        </Typography>
      </Paper>
    </div>
  )
}

Counter.propTypes = {
  date: PropTypes.string.isRequired,
}

export default Counter
