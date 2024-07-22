import React from 'react';
import './catalogo.css';

import producto1 from '../Imagenes/producto1.png';
import producto2 from '../Imagenes/producto2.png';
import producto3 from '../Imagenes/producto3.png';
import producto4 from '../Imagenes/producto4.png';
import producto5 from '../Imagenes/producto5.png';
import producto6 from '../Imagenes/producto6.png';
import producto7 from '../Imagenes/producto7.png';
import producto8 from '../Imagenes/producto8.png';

const products = [
  {
    image: producto1,
    name: 'Bota deportiva denim combinada',
    price: '$51.99',
  },
  {
    image: producto2,
    name: 'Deportiva negra estampada',
    price: '$51.99',
  },
  {
    image: producto3,
    name: 'Deportiva combinada suela volumen',
    price: '$51.99',
  },
  {
    image: producto4,
    name: 'Deportiva casual combinada aire',
    price: '$48.99',
  },
  {
    image: producto5,
    name: 'Zapatilla lona negra elásticos',
    price: '$30.60',
  },
  {
    image: producto6,
    name: 'Deportiva casual efecto piel combinada',
    price: '$38.99',
  },
  {
    image: producto7,
    name: 'Deportiva lona logo lateral',
    price: '$27.99',
  },
  {
    image: producto8,
    name: 'Deportiva clásica bandas laterales',
    price: '$33.99',
  },
];

const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3>{name}</h3>
    <p>{price}</p>
    <button>Añadir al carrito</button>
    <button>Favorito</button>
  </div>
);

const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      <h2>Catálogo de zapatillas deportivas para hombre</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
