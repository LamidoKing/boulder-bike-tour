import React from "react"
import Map from "components/Map/Map"
import Loading from "components/Loading/Loading"
import { useFetch } from "hooks"
import { Urls } from "utils"
import locationStyles from "styles/pages/locations/location"

const Location = () => {
  const classes = locationStyles()

  const { data, status } = useFetch({
    url: `${Urls.bbtApiUrl}/riders`,
    method: "GET",
  })

  const findcenter = (locations) => {
    let centerLat = 0
    let centerLng = 0
    locations.forEach((loc) => {
      centerLat += parseFloat(loc.latitude)
      centerLng += parseFloat(loc.longitude)
    })
    const lat = centerLat / 20
    const lng = centerLng / 20
    return { lat, lng }
  }

  const center = findcenter(data)

  return (
    <div className={classes.root}>
      <Loading status={status} top />
      {status === "fetched" && <Map center={center} locations={data} />}
    </div>
  )
}

export default Location
