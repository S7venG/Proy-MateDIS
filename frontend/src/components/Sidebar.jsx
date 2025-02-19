import React, { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
      ≡
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          X
        </button>
        <h2>Menú</h2>
        <ul>
          <li>Inicio</li>
          <li>Mapa</li>
          <li>Contactos</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
