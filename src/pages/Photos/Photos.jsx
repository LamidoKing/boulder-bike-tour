import React, { useEffect, useState } from "react"
import photosStyles from "styles/pages/photos/photos"
import { useFetch, usePageBotton, usePrevious } from "hooks"
import { Urls } from "utils"
import PhotoList from "./Sections/PhotoList"

const Photos = () => {
  const classes = photosStyles()

  const getUrl = (value) => {
    return `${Urls.flickrApi}&api_key=${process.env.REACT_APP_API_KEY}&tags=bike&per_page=20&page=${value}&format=json&nojsoncallback=1`
  }
  const [page, setPage] = useState(1)

  const { data, status } = useFetch({ url: getUrl(1), method: "GET" })
  const more = useFetch({ url: getUrl(page), method: "GET" })

  const [photos, setPhotos] = useState([])
  let isBottom = usePageBotton()

  const prevPage = usePrevious(page)
  const prevPhotos = usePrevious(photos)

  const morePhotos = more.status === "fetched" ? more.data.photos.photo : []

  const fetchPhoto = () => {
    if (status === "fetched") {
      setPhotos(data.photos.photo)
    }
  }
  const fetchMore = () => {
    let newPhotos

    setPage(prevPage + 1)
    if (more.status === "fetched") {
      newPhotos = prevPhotos.concat(morePhotos)
      setPhotos(newPhotos)
    }

    isBottom = false
  }

  useEffect(() => {
    fetchPhoto()
  }, [status])

  useEffect(() => {
    if (isBottom && more.status === "fetched") {
      fetchMore()
    }

    return () => {
      fetchMore()
    }
  }, [isBottom, page])

  return (
    <div className={classes.root}>
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
