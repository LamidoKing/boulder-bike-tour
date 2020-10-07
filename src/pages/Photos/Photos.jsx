import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import photosStyles from "styles/pages/photos/photos"
import { useFetch, usePageBotton, usePrevious } from "hooks"
import { Urls } from "utils"
import Dialog from "components/Dialog/Dialog"
import PhotoList from "./Sections/PhotoList"

const Photos = () => {
  const history = useHistory()
  const classes = photosStyles()
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState()
  const getUrl = (value) => {
    return `${Urls.flickrApi}&api_key=${process.env.REACT_APP_API_KEY}&tags=bikerace&per_page=40&page=${value}&format=json&nojsoncallback=1`
  }
  const [page, setPage] = useState(1)

  const { data, status, error } = useFetch({ url: getUrl(1), method: "GET" })
  const more = useFetch({ url, method: "GET" })

  const [photos, setPhotos] = useState([])
  let isBottom = usePageBotton()

  const prevPage = usePrevious(page)
  const prevPhotos = usePrevious(photos)

  const morePhotos = more.status === "fetched" ? more.data.photos.photo : []

  const errorMessage = "Network Error Check Your Internet Connetion and Refresh"

  useEffect(() => {
    const fetchPhoto = () => {
      if (status === "fetched") {
        setPhotos(data.photos.photo)
      }
      if (status === "error" && !error) {
        setOpen(true)
      }
    }
    fetchPhoto()
  }, [status, data.photos, error])

  const fetchMore = () => {
    let newPhotos
    if (more.status === "fetching") {
      isBottom = false
      return
    }

    const nextPage = prevPage ? prevPage + 1 : page + 1
    setPage(nextPage)
    setUrl(getUrl(nextPage))

    if (more.status === "fetched") {
      newPhotos = prevPhotos.concat(morePhotos)
      setPhotos(newPhotos)
    }

    isBottom = false
  }

  useEffect(() => {
    fetchMore()

    return () => {
      fetchMore()
    }
    // eslint-disable-next-line
  }, [isBottom]);

  const handleClose = () => {
    setOpen(false)
  }

  const handleRefresh = () => {
    setOpen(false)
    history.go(0)
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        errorMessage={errorMessage}
        handleClose={handleClose}
        handleRefresh={handleRefresh}
      />
      <div className={classes.container}>
        <PhotoList
          photos={photos}
          status={status}
          moreFetchStatus={more.status}
        />
      </div>
    </div>
  )
}

export default Photos
