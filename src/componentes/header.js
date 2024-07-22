import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import barritaImage from '../Imagenes/barritaImage.png';  

const Header = () => {
  return (
    <header className="header">
      <img src={barritaImage} alt="Barrita Romulo" className="barrita-image" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogo">Catalogo</Link></li>
          <li>Promociones</li>
          <li>Favoritos</li>
          <li>Carrito</li>
          <li><Link to="/login">Login/Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
