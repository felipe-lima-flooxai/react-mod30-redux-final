import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayCard.css';

function DisplayCard() {
  const valor = useSelector((state) => state.contador.valor);
  const ganhou = useSelector((state) => state.contador.ganhou);

  return (
    <div className="display-card">
      <h2>Valor Atual</h2>
      <div className="display-valor">{valor}</div>
      {ganhou && <p className="mensagem-ganhou">🎉 Parabéns! Você zerou o número! 🎉</p>}
    </div>
  );
}

export default DisplayCard;
