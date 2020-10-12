import React from "react"
import PropTypes from "prop-types"
import GoogleMapReact from "google-map-react"
import mapStyles from "styles/components/mapStyles"
import Marker from "./Maker"

const Map = (props) => {
  const classes = mapStyles()
  const { center, locations } = props
  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={center}
        defaultZoom={12.5}
      >
        {locations.map((location) => {
          return (
            <Marker
              key={location.id}
              lat={location.latitude}
              lng={location.longitude}
              text={location.name}
              location={location}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  locations: PropTypes.oneOfType([PropTypes.array]).isRequired,
  center: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
export default Map
