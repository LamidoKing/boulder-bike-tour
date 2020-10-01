import React, { useEffect, useState } from "react"
import photosStyles from "styles/pages/photos/photos"
import { useFetch, usePageBotton, usePrevious } from "hooks"
import { Urls } from "utils"
import PhotoList from "./Sections/PhotoList"

const Photos = () => {
  const classes = photosStyles()
  const [url, setUrl] = useState()
  const getUrl = (value) => {
    return `${Urls.flickrApi}&api_key=${process.env.REACT_APP_API_KEY}&tags=bike&per_page=20&page=${value}&format=json&nojsoncallback=1`
  }
  const [page, setPage] = useState(1)

  const { data, status } = useFetch({ url: getUrl(1), method: "GET" })
  const more = useFetch({ url, method: "GET" })

  const [photos, setPhotos] = useState([])
  let isBottom = usePageBotton()

  const prevPage = usePrevious(page)
  const prevPhotos = usePrevious(photos)

  const morePhotos = more.status === "fetched" ? more.data.photos.photo : []

  useEffect(() => {
    const fetchPhoto = () => {
      if (status === "fetched") {
        setPhotos(data.photos.photo)
      }
    }
    fetchPhoto()
  }, [status, data.photos])

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
