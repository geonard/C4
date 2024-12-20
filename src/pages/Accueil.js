import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RadioButtons from './RadioButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css';

const Accueil = () => {
  const history = useHistory();
  const [backgroundImage, setBackgroundImage] = useState('/images/accueil11.jpg');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [response, setResponse] = useState('');

  useEffect(() => {
    setBackgroundImage('/images/accueil1.jpg');
  }, []);

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Bonjour du FrontEnd' }),
      });
      const responseData = await response.json();
      setResponse(responseData.message);
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (response.ok) {
        history.push('/boutique');
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <div className="accueil-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={handleClick}>VOIR LA BOUTIQUE</button>
        {response && <p>Réponse du serveur : {response}</p>}
      </div>
      <div className="middle-section">
        <RadioButtons selectedOption={selectedOption} setSelectedOption={setSelectedOption} setBackgroundImage={setBackgroundImage} />
      </div>
      <footer className="footer-section">
        <p>© 2024 Boutique. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Accueil;
