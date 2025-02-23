import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import MarkerUser from "./MarkerUser";

const Map = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [userPosition, setUserPosition] = useState(null);

  const handleRealTimeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="map-container">
      <MapContainer center={[-12.118, -77.01]} zoom={15} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userPosition && <MarkerUser position={userPosition} />}
      </MapContainer>
      <div
        className="fixed-button"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        Seleccione su ubicación
        {showOptions && (
          <div className="options">
            <button className="option-button">Seleccionar del mapa</button>
            <button className="option-button" onClick={handleRealTimeLocation}>
              Ubicación en tiempo real
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;

