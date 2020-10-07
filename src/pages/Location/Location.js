import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Map from "components/Map/Map"
import Loading from "components/Loading/Loading"
import { useFetch } from "hooks"
import { Urls } from "utils"
import locationStyles from "styles/pages/locations/location"
import Dialog from "components/Dialog/Dialog"

const Location = () => {
  const history = useHistory()
  const classes = locationStyles()
  const [open, setOpen] = useState(false)
  const message =
    "Network Error Check Your Internet Connetion Do you want refresh"

  const { data, status, error } = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    method: "GET",
  })

  const findcenter = (locations) => {
    const { length } = locations

    let centerLat = 0
    let centerLng = 0

    locations.forEach((loc) => {
      centerLat += parseFloat(loc.latitude)
      centerLng += parseFloat(loc.longitude)
    })

    const lat = centerLat / length
    const lng = centerLng / length
    return { lat, lng }
  }
  const center = findcenter(data)

  const handleClose = () => {
    setOpen(false)
  }
  const handleRefresh = () => {
    setOpen(false)
    history.go(0)
  }
  useEffect(() => {
    if (status === "error" && !error) {
      setOpen(true)
    }
  }, [status, error])

  return (
    <div className={classes.root}>
      <Loading status={status} top />
      <Dialog
        open={open}
        errorMessage={message}
        handleClose={handleClose}
        handleRefresh={handleRefresh}
      />
      {status === "fetched" && <Map center={center} locations={data} />}
    </div>
  )
}

export default Location
