import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import Counter from './Counter';
import './CustomNavbar.css';

const CustomNavbar = ({ cartCount, resetCartCount }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const fetchPurchasedItems = async () => {
    try {
      const response = await fetch('/api/purchased-items');
      if (!response.ok) {
        throw new Error('Failed to fetch purchased items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching purchased items:', error);
      return [];
    }
  };

  const handleCartClick = async () => {
    try {
      const data = await fetchPurchasedItems();
      setPurchasedItems(data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching purchased items:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = purchasedItems.filter(item => item.id !== id);
    setPurchasedItems(updatedItems);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedItems = purchasedItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setPurchasedItems(updatedItems);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedItems = purchasedItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setPurchasedItems(updatedItems);
  };

  const calculateTotal = () => {
    const total = purchasedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return total.toFixed(2);
  };

  const handleReinitPanier = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/clear-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Panier réinitialisé avec succès');
        resetCartCount(); // Réinitialise le compteur de panier
        setPurchasedItems([]); // Vide l'état local du panier
        handleClosePopup(); // Ferme la popup
      } else {
        console.error('Erreur lors de la réinitialisation du panier sur le backend:', response.statusText);
        alert('Échec de la réinitialisation du panier');
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du panier:', error);
      alert('Erreur lors de la réinitialisation du panier');
    }
  };

  useEffect(() => {
    handleReinitPanier();
  }, []);
  
  const handleValidPanier = () => {
    // Ajoutez votre logique pour valider le panier
  };

  return (
    <div>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <img src="./images/logo.png" className="navbar-logo" alt="Logo" />
          <Navbar.Brand href="/">Accueil</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/boutique">Boutique</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item onClick={handleCartClick}>
                <Nav.Link>
                  <span className="cart-counter">{cartCount}</span>
                  <FaShoppingCart />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header" style={{ width: '100%', border: '1px solid #ccc', padding: '10px' }}>
              <FaTimes size={32} className="icon-close-popup" onClick={handleClosePopup} />
              <h2>PANIER</h2>
            </div>

            <div className="liste-container">
              <ul>
                {purchasedItems.map((item, index) => (
                  <li key={index} className="purchased-item">
                    <FaTimes className="remove-item" onClick={() => handleRemoveItem(item.id)} />
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="item-details">
                      <span className="item-title">{item.title}</span>
                      <span className="item-price">{item.price} €</span>
                      <span className="item-quantity">Quantité:</span>
                      <Counter
                        value={item.quantity}
                        onIncrease={() => handleIncreaseQuantity(item.id)}
                        onDecrease={() => handleDecreaseQuantity(item.id)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="total-container">
              <span className="total-label">Total: </span>
              <span className="total-amount">{calculateTotal()} €</span>

              <div className="button-container">
                <button onClick={handleReinitPanier} className="reinit-button">
                  REINITIALISER LE PANIER
                </button>
                <button onClick={handleValidPanier} className="valid-button">
                  VALIDER LE PANIER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;
