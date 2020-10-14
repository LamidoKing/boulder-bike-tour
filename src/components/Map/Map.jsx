import React from "react"
import PropTypes from "prop-types"
import mapStyles from "styles/components/mapStyles"
import Map from "pigeon-maps"
import Overlay from "pigeon-overlay"
import Marker from "./Maker"

const MAP_ID = "streets"

function mapTilerProvider(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${process.env.REACT_APP_MAPTILER_ACCESS_TOKEN}`
}

const Maps = (props) => {
  const classes = mapStyles()
  const { center, locations } = props
  return (
    <div className={classes.map}>
      <Map
        provider={mapTilerProvider}
        center={[center.lat, center.lng]}
        zoom={12.4}
      >
        {locations.map((location) => {
          const lng = parseFloat(location.longitude)
          return (
            <Overlay anchor={[location.latitude, lng]} key={location.id}>
              <Marker location={location} />
            </Overlay>
          )
        })}
      </Map>
    </div>
  )
}

Maps.propTypes = {
  locations: PropTypes.oneOfType([PropTypes.array]).isRequired,
  center: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
export default Maps
