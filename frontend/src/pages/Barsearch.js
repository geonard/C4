import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Barsearch.css'; // Importation des styles CSS personnalisés pour le Barsearch

const Barsearch = () => {
  return (
    <div className="barsearch">
      {/* Flèche gauche */}
      <Button variant="light">
        <a href="URL_FOR_LEFT_ARROW" className="icon-link">
          <i className="fas fa-arrow-left"></i>
        </a>
      </Button>
      {/* Flèche droite */}
      <Button variant="light">
        <a href="URL_FOR_RIGHT_ARROW" className="icon-link">
          <i className="fas fa-arrow-right"></i>
        </a>
      </Button>
      {/* Croix rouge */}
      <Button variant="danger">
        <a href="URL_FOR_CLOSE" className="icon-link">
          <i className="fas fa-times"></i>
        </a>
      </Button>
      {/* Home */}
      <Button variant="light">
        <a href="URL_FOR_HOME" className="icon-link">
          <i className="fas fa-home"></i>
        </a>
      </Button>

      <div className="barsearch-center">
        {/* Barre de recherche */}
        <InputGroup>
          <FormControl placeholder="https://" />
        </InputGroup>
      </div>
      <div className="icon-loupe">
        {/* Loupe */}
        <Button className="icon-loupe" variant="light">
          <a href="https://www.google.com" className="icon-link">
            <i className="fas fa-search"></i>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Barsearch;
