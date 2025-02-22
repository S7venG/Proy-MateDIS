import React, { useState } from "react";
import { Link } from "react-router-dom"
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
          <li>
            <Link to="/" className="nav-button Home_btn" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/map" className="nav-button Map_btn" onClick={() => setIsOpen(false)}>
              Mapa
            </Link>
          </li>
            Contactos
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
