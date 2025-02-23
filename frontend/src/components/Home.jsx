import React from 'react';
import "../styles/Home.css";

const Home = () => (
    <div>
    <div className="home-container">
      <h1>Bienvenido a la página de inicio</h1>
    </div>

    <div className="info-box">
      <div className="info-box-image">
        <img src="../images/homeimage.jpg" alt="imagen" />
      </div>
      <div className="info-box-content">
        <h3>¿?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta unde voluptatibus error a, ab saepe. Obcaecati sequi debitis dolores doloremque aperiam! Exercitationem quis, voluptatibus iste in temporibus sint ipsum!</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
);

  export default Home;