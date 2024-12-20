// Counter.js
import React from 'react';
import './Counter.css'; // Assurez-vous d'avoir les styles pour ce composant

const Counter = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="counter">
      <button onClick={onDecrease} disabled={value <= 1}>-</button>
      <span>{value}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default Counter;
