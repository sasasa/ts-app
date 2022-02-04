import { useParams } from 'react-router-dom';
import { useContext, useEffect, memo, FC } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";


export const Post: FC = memo(() => {
  const key = process.env.MIX_GOOGLEMAP_KEY
  if(key == undefined) {
    throw Error('keyが空です。');
  }
  const {lat, lng, name} = useParams();
  if(lat == undefined) {
    throw Error('latが空です。');
  }
  if(lng == undefined) {
    throw Error('lngが空です。');
  }
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  }
  const containerStyle = {
    height: "60vh",
    width: "100%",
  };
  const divStyle = {
    background: "white",
    fontSize: 7.5,
  }
  return (
    <>
      <h2>{lat}:{lng}:{name}</h2>
      <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      > 
        <InfoWindow position={center}>
          <div style={divStyle}>
            <h1>{name}</h1>
          </div>
        </InfoWindow>
        <Marker position={center} label={name} />
      </GoogleMap>
      </LoadScript>
    </>
  )
});