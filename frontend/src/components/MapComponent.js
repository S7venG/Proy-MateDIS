import React, { useEffect, useRef, useState } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null); // Guardamos el mapa en el estado

  useEffect(() => {
    if (window.google) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: -12.0464, lng: -77.0428 }, // Lima, Perú
        zoom: 14,
      });

      setMap(newMap); // Guardamos el mapa en el estado

      // Agregar marcador inicial
      new window.google.maps.Marker({
        position: { lat: -12.0464, lng: -77.0428 },
        map: newMap,
        title: "Ubicación inicial",
      });
    }
  }, []);

  // 📌 Función para centrar el mapa en la ubicación del usuario
  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if (map) {
            map.setCenter(userLocation); // Centra el mapa en la ubicación del usuario
            new window.google.maps.Marker({
              position: userLocation,
              map,
              title: "Tu ubicación",
            });
          }
        },
        () => {
          alert("No se pudo obtener la ubicación");
        }
      );
    }
  };

  return (
    <div>
      {/* Mapa */}
      <div ref={mapRef} className="map-container"></div>

      {/* 📍 Botón flotante para ubicación */}
      <button className="circular-button" onClick={handleLocateUser}>
        📍
      </button>
    </div>
  );
};

export default MapComponent;
