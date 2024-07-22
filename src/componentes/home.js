// Home.js (o paginaPrincipal.js, si prefieres ese nombre)
import React from 'react';
import './home.css';
import promoImage from '../Imagenes/img_promocional.jpg';
import product1 from '../Imagenes/producto1.png';
import product2 from '../Imagenes/producto2.png';
import product3 from '../Imagenes/producto3.png';
import product4 from '../Imagenes/producto4.png';
import product5 from '../Imagenes/producto7.png';
import product6 from '../Imagenes/producto6.png';

function Home() {
  return (
    <div className="home">
        <h1>Bienvenido a la Página Principal</h1>
      <header className="promo-imagenes">
        <img src={promoImage} alt="Promotional" />
      </header>
      <section>
        <h2>"Corre hacia el estilo: ¡Nuevas zapatillas deportivas en oferta!"</h2>
      </section>
      <section className="grid-container">
        <div className="grid-row">
          <div className="grid-item">
            <img src={product1} alt="Imagen 1" />
            <p>Cómodo</p>
          </div>
          <div className="grid-item">
            <img src={product2} alt="Imagen 2" />
            <p>Resistente</p>
          </div>
          <div className="grid-item">
            <img src={product3} alt="Imagen 3" />
            <p>Espectacular</p>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <img src={product4} alt="Imagen 4" />
            <p>Con estilo</p>
          </div>
          <div className="grid-item">
            <img src={product5} alt="Imagen 5" />
            <p>Innovador</p>
          </div>
          <div className="grid-item">
            <img src={product6} alt="Imagen 6" />
            <p>Diseño moderno</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
