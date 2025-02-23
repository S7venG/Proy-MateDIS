import React from "react";
import { Hospital } from "lucide-react";
import "../styles/Topbar.css"; // Importa el archivo de estilos

const TopBar = () => {
  return (
    <div className="top-bar">
      <h1><Hospital className="icon" /> Encuentra tu hospital más cercano</h1>
    </div>
  );
};

export default TopBar;
