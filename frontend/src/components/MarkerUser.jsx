import { useEffect } from "react";

const MarkerUser = ({ map, position }) => {
  useEffect(() => {
    if (!map || !position) return;

    // Crear el marcador de usuario
    const marker = new window.google.maps.Marker({
      position: { lat: position[0], lng: position[1] },
      map,
      title: "Tu ubicación",
      icon: {
        url: require("../images/userlocation.png"),
        scaledSize: new window.google.maps.Size(35, 35), // Tamaño del ícono
        anchor: new window.google.maps.Point(17, 35), // Punto de anclaje
      },
    });

    // InfoWindow (Popup)
    const infoWindow = new window.google.maps.InfoWindow({
      content: "Tu ubicación",
    });

    // Mostrar el popup al hacer clic en el marcador
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    // Cleanup: Eliminar marcador cuando el componente se desmonta
    return () => marker.setMap(null);
  }, [map, position]);

  return null; // No renderiza nada directamente
};

export default MarkerUser;
