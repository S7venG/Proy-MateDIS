import React, { useState, useRef, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const googleMapsApiKey = "AIzaSyAVOh6ZXRiPCr0HpSAm0myYvsLD1oIWBTk";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = { lat: -12.118, lng: -77.01 }; // Centro del mapa en Lima

const Map = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [selectMode, setSelectMode] = useState(false);
  const [buttonText, setButtonText] = useState("Seleccione su ubicación");
  const [isEditing, setIsEditing] = useState(false);
  const mapRef = useRef(null);

  // 📌 Obtener ubicación en tiempo real
  const handleRealTimeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserPosition(newPosition);
          mapRef.current?.panTo(newPosition);
        },
        (error) => {
          alert("Error obteniendo la ubicación: " + error.message);
        }
      );
    } else {
      alert("Geolocalización no es compatible con este navegador.");
    }
  };

  // 📌 Seleccionar ubicación en el mapa con clic
  const handleMapClick = useCallback((event) => {
    if (selectMode) {
      setUserPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
      setSelectMode(false);
    }
  }, [selectMode]);

  // 📌 Editar manualmente coordenadas
  const handleDoubleClick = () => {
    setIsEditing(true);
    setButtonText("");
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

  // 📌 Convertir texto en coordenadas
  const updatePositionFromText = () => {
    const coords = buttonText.split(",").map(coord => parseFloat(coord.trim()));
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      const newPos = { lat: coords[0], lng: coords[1] };
      setUserPosition(newPos);
      mapRef.current?.panTo(newPos);
    } else {
      setButtonText("Seleccione su ubicación");
    }
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={15}
          onLoad={(map) => (mapRef.current = map)}
          onClick={handleMapClick}
        >
          {userPosition && <Marker position={userPosition} />}
        </GoogleMap>

        <div className="button-container">
          <button className="option-button" onClick={() => setSelectMode(true)}>
            Seleccionar del mapa
          </button>
          <button className="option-button" onClick={handleRealTimeLocation}>
            Ubicación en tiempo real
          </button>
          <div className="fixed-button" onDoubleClick={handleDoubleClick}>
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
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default Map;
