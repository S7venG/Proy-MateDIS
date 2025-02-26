import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.6037, // Latitud de Buenos Aires (ejemplo)
  lng: -58.3816, // Longitud de Buenos Aires (ejemplo)
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAVOh6ZXRiPCr0HpSAm0myYvsLD1oIWBTk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
