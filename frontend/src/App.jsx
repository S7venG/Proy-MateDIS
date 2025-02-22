import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;


