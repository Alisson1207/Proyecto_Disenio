import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <p>Redes sociales:</p>
        <div>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>TikTok</span>
        </div>
      </div>
      <div className="contacts">
        <p>Contactos:</p>
        <p>0984952445</p>
        <p>De lunes a viernes de 9:00 a 18:00</p>
        <p>Escríbenos</p>
      </div>
      <div className="links">
        <p>Términos y condiciones</p>
        <p>¿Quiénes somos?</p>
        <p>Guía de conservación del producto</p>
        <p>Guía de las tallas</p>
      </div>
    </footer>
  );
};

export default Footer;
