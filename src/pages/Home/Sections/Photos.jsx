import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { useFetch } from "hooks"
import { Urls } from "utils"
import homePhotoStyles from "styles/pages/home/sections/photo"

const Photos = (props) => {
  const classes = homePhotoStyles()
  const history = useHistory()
  const { image } = props
  const { data, status } = useFetch({
    url: `${Urls.flickrApi}&api_key=${process.env.REACT_APP_API_KEY}&tags=bikerace&per_page=10&page=10&format=json&nojsoncallback=1`,
    method: "GET",
  })

  const featured = [
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
  ]
  return (
    <>
      <div className={classes.title}>
        <Typography component="span" variant="h6">
          EVENT PHOTOS
        </Typography>
      </div>

      <div className={classes.root}>
        {status === "fetched" && data.photos ? (
          <GridList cellHeight={200} spacing={1} className={classes.gridList}>
            {data.photos.photo.map((photo, index) => (
              <GridListTile
                key={photo.id}
                cols={featured[index] ? 2 : 1}
                rows={featured[index] ? 2 : 1}
              >
                <img
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  alt={photo.title}
                  className={classes.image}
                />
              </GridListTile>
            ))}
            <ButtonBase
              focusRipple
              className={classes.image2}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "40%",
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                  onClick={() => history.push("/photos")}
                >
                  View More
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </GridList>
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </>
  )
}

Photos.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Photos
