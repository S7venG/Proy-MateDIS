import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import MarkerUser from "./MarkerUser";

const Map = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [userPosition, setUserPosition] = useState(null);
  const [selectMode, setSelectMode] = useState(false);
  const [buttonText, setButtonText] = useState("Seleccione su ubicación");
  const [isEditing, setIsEditing] = useState(false);
  const mapRef = useRef();

  const handleRealTimeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Current position:", latitude, longitude); // Agrega este log para verificar las coordenadas
          setUserPosition([latitude, longitude]);
          const map = mapRef.current;
          if (map != null) {
            map.setView([latitude, longitude], 17); // Ajusta el centro y el zoom a la ubicación del usuario
          }
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
          alert("Error getting geolocation. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleCenterMap = () => {
    const map = mapRef.current;
    if (map != null && userPosition) {
      map.setView(userPosition, 17); // Ajusta el centro y el zoom a la ubicación del usuario
    }
  };

  const handleMapClick = () => {
    setSelectMode(true);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
    setButtonText(""); // Borra el texto del botón
  };

  const handleBlur = () => {
    setIsEditing(false);
    updatePositionFromText();
  };

  const handleChange = (e) => {
    setButtonText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updatePositionFromText();
      setIsEditing(false);
    }
  };

  const updatePositionFromText = () => {
    const coords = buttonText.split(",").map(coord => parseFloat(coord.trim()));
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      setUserPosition(coords);
      const map = mapRef.current;
      if (map != null) {
        map.setView(coords, 17); // Ajusta el centro y el zoom a la nueva ubicación
      }
    } else {
      setButtonText("Seleccione su ubicación"); // Restablece el texto del botón si las coordenadas no son válidas
    }
  };

  const MapEvents = () => {
    useMapEvents({
      dblclick(e) {
        if (selectMode) {
          setUserPosition([e.latlng.lat, e.latlng.lng]);
          setSelectMode(false);
        }
      },
    });
    return null;
  };

  return (
    <div className="map-container">
      <MapContainer center={[-12.118, -77.01]} zoom={15} className="map" ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userPosition && <MarkerUser position={userPosition} />}
        <MapEvents />
      </MapContainer>
      <div className="button-container">
        <div className="circular-button" onClick={handleCenterMap}>
          <img src={require("../images/userlocation.png")} alt="Icono" />
        </div>
        <div
          className="fixed-button"
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
          onDoubleClick={handleDoubleClick}
        >
          {isEditing ? (
            <input
              type="text"
              value={buttonText}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="transparent-input"
            />
          ) : (
            buttonText
          )}
          {showOptions && (
            <div className="options">
              <button className="option-button" onClick={handleMapClick}>
                Seleccionar del mapa
              </button>
              <button className="option-button" onClick={handleRealTimeLocation}>
                Ubicación en tiempo real
              </button>
            </div>
          )}
        </div>
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
};

export default Map;