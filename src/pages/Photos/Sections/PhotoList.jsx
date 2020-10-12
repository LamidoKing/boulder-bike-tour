/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Dialog from "components/Dialog/Dialog"
import { GridList, GridListTile } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
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
      <GridList cellHeight={200} cols={3} className={classes.grid}>
        {status === "fetched"
          ? photos.map((photo) => {
              return (
                <GridListTile key={photo.id} cols={photo.cols || 1}>
                  <img
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                    alt={photo.title}
                    onClick={() =>
                      handleClickOpen(
                        `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                      )
                    }
                    className={classes.image}
                    role="presentation"
                  />
                </GridListTile>
              )
            })
          : Array.from(new Array(20)).map((i, index) => {
              return (
                <GridListTile key={index} cols={1}>
                  <Skeleton
                    animation="wave"
                    height={200}
                    className={classes.card}
                  />
                </GridListTile>
              )
            })}
        {moreFetchStatus === "fetching" &&
          status === "fetched" &&
          Array.from(new Array(20)).map((i, index) => {
            return (
              <GridListTile key={index} cols={1}>
                <Skeleton
                  height={200}
                  animation="wave"
                  className={classes.card}
                />
              </GridListTile>
            )
          })}
      </GridList>
    </>
  )
}

PhotoList.propTypes = {
  photos: PropTypes.oneOfType([PropTypes.array]).isRequired,
  status: PropTypes.string.isRequired,
  moreFetchStatus: PropTypes.string.isRequired,
}

export default PhotoList
