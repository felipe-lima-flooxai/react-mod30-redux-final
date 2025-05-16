import React from 'react';
import { useSelector } from 'react-redux';
import './ObjetivoDisplay.css';

function ObjetivoDisplay() {
  const objetivo = useSelector((state) => state.contador.objetivo);

  return (
    <div className="objetivo-display">
      <h2>Objetivo:</h2>
      <div className="objetivo-valor">{objetivo}</div>
    </div>
  );
}

export default ObjetivoDisplay;
