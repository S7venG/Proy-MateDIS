import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: require("../images/userlocation.png"),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

const MarkerUser = ({ position }) => {
  return (
    <Marker position={position} icon={userIcon}>
      <Popup>Tu ubicación</Popup>
    </Marker>
  );
};

export default MarkerUser;