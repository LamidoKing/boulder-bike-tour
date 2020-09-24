/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Dialog from "components/Dialog/Dialog"
import { Box, Card, CardActionArea, CardMedia } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import photostyles from "styles/pages/photos/photos"

const PhotoList = (props) => {
  const classes = photostyles()
  const { photos, status, moreFetchStatus } = props
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState()

  const handleClickOpen = (url) => {
    setOpen(true)
    setImage(url)
  }

  const handleClose = () => {
    setOpen(false)
    setImage("")
  }

  return (
    <>
      <Dialog open={open} image={image} handleClose={handleClose} />
      <GridContainer>
        {status === "fetched"
          ? photos.map((photo) => {
              return (
                <GridItem xs={12} sm={6} md={4} lg={4} key={photo.id}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        image={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                        title="Contemplative Reptile"
                        onClick={() =>
                          handleClickOpen(
                            `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                          )
                        }
                      />
                    </CardActionArea>
                  </Card>
                </GridItem>
              )
            })
          : Array.from(new Array(20)).map((i, index) => {
              return (
                <GridItem xs={12} sm={6} md={4} lg={4} key={index}>
                  <Box>
                    <Skeleton
                      animation="wave"
                      height={200}
                      className={classes.card}
                    />
                  </Box>
                </GridItem>
              )
            })}
        {moreFetchStatus === "fetching" &&
          status === "fetched" &&
          Array.from(new Array(20)).map((i, index) => {
            return (
              <GridItem xs={12} sm={6} md={4} lg={4} key={index}>
                <Box>
                  <Skeleton
                    height={200}
                    animation="wave"
                    className={classes.card}
                  />
                </Box>
              </GridItem>
            )
          })}
      </GridContainer>
    </>
  )
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  moreFetchStatus: PropTypes.string.isRequired,
}

export default PhotoList
