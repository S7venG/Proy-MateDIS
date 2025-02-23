import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Home,Map,Info } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
          <li style={{ marginTop: "340px", fontSize: "25px" }}>
            <Info className="icon" /> Contactos
            <br /><span style={{ fontSize: "18px", marginLeft: "20px" }}>Policia: 911</span>
            <br /><span style={{ fontSize: "18px", marginLeft: "20px"  }}>Bomberos: 100</span>
            <br /><span style={{ fontSize: "18px", marginLeft: "20px"  }}>Ambulancia: 107</span>
            <br /><span style={{ fontSize: "18px", marginLeft: "20px"  }}>Defensa Civil: 103</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
