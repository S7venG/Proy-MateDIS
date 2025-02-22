import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Home,Map,Info } from "lucide-react";
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
              <Home className="icon" /> Inicio
            </Link>
          </li>
          <li>
            <Link to="/map" className="nav-button Map_btn" onClick={() => setIsOpen(false)}>
              <Map className="icon" /> Mapa
            </Link>
          </li>
          <li style={{ marginTop: "400px" }}>
            <Info className="icon" /> Contactos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
