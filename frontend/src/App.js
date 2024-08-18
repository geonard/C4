import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Barsearch from './pages/Barsearch';
import CustomNavbar from './pages/CustomNavbar';
import Footer from './pages/Footer';
import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Si vous avez besoin de charger des données initiales, faites-le ici
  }, []);

  const resetCartCount = () => {
    setCartCount(0);
  };

  const incrementCartCount = (quantity) => {
    setCartCount(prevCount => prevCount + quantity);
  };

  const decrementCartCount = (quantity) => {
    setCartCount(prevCount => Math.max(prevCount - quantity, 0));
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Barsearch />
          <CustomNavbar
            cartCount={cartCount}
            resetCartCount={resetCartCount}
          />
        </header>
        <div className="content-wrap">
          <Switch>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route path="/boutique" exact>
              <Boutique
                incrementCartCount={incrementCartCount}
                decrementCartCount={decrementCartCount}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
