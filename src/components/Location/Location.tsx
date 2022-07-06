//section for util imports
import React from "react"
import './Location.css'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

//section for component imports
import map from '../../images/fakemap.png'

//section for map function
const containerStyle = {
  width: '80vw',
  height: '80vh'
};

const center = {
  lat: 51.51726681102626,
  lng: -0.12071196479936175
};
  


//section for functional component
const Location: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBM254FQOcjixIgOwnZxswsrzUEoMuSECY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (

    <div className="location">

      <div className="locleg">
          <h2>LOCATION</h2>
          <p>12 Upper St. Martin’s Lane<br/> WC2H 9FB, London</p>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}

export default Location

{/* <div className="location">

<div className="locleg">
    <h2>LOCATION</h2>
    <p>12 Upper St. Martin’s Lane<br/> WC2H 9FB, London</p>
</div> */}