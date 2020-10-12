import React from "react"
import PropTypes from "prop-types"
import Skeleton from "@material-ui/lab/Skeleton"
import { Box, Paper, Typography } from "@material-ui/core"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import image from "assets/img/avatar.webp"

const RidersList = (props) => {
  const { riders, status, classes } = props
  return (
    <>
      <GridContainer>
        {status === "fetched"
          ? riders.map((rider) => {
              return (
                <GridItem xs={12} sm={6} md={4} lg={4} key={rider.id}>
                  <Paper
                    className={classes.paper1}
                    elevation={6}
                    color="primary"
                  >
                    <div className={classes.align}>
                      <img
                        src={rider.photo || image}
                        alt=""
                        className={classes.img}
                      />
                    </div>
                    <Typography variant="h6" className={classes.text}>
                      {`Name: ${rider.first_name} ${rider.last_name}`}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                      {`City of Origin: ${rider.city_of_origin}`}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                      {`State of Origin: ${rider.state_of_origin}`}
                    </Typography>
                  </Paper>
                </GridItem>
              )
            })
          : Array.from(new Array(20)).map((i, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <GridItem xs={12} sm={6} md={4} lg={4} key={index}>
                  <Box>
                    <Skeleton animation="wave" height={200} />
                  </Box>
                </GridItem>
              )
            })}
      </GridContainer>
    </>
  )
}

RidersList.propTypes = {
  riders: PropTypes.oneOfType([PropTypes.array]).isRequired,
  status: PropTypes.string.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default RidersList
