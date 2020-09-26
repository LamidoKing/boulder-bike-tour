import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Maker";
import mapStyles from "styles/components/mapStyles";

const Map2 = (prop) => {
  const classes = mapStyles();
  const { center, locations } = prop;
  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={center}
        defaultZoom={13}
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
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map2;
