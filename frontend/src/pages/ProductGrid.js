import React from 'react';
import axios from 'axios';
import './ProductGrid.css';


const ProductGrid = ({ products, incrementCartCount }) => {
  const addToCart = async (product) => {
    try {
      await axios.post('/api/add-to-cart', { product });
      incrementCartCount(product.quantity || 1); // Incrémente le compteur de panier
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Erreur lors de l\'ajout du produit au panier.');
    }
  };

  return (
    <div className="product-grid">
      {products.slice(0, 9).map(product => (
        <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
      ))}
    </div>
  );
};

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{product.price} €</p>
        <p className="product-note">Note: {product.note}</p>
        <button className="ajout-panier" onClick={addToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductGrid;
