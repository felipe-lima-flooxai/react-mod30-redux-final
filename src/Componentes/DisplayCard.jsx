import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortearNovoValor } from '../features/contadorSlice';
import './DisplayCard.css';

function DisplayCard() {
  const valor = useSelector((state) => state.contador.valor);
  const ganhou = useSelector((state) => state.contador.ganhou);

  const dispatch = useDispatch();

  const [contadorRegressivo, setContadorRegressivo] = useState(null);

  useEffect(() => {
    if (ganhou) {
      setContadorRegressivo(10);

      const intervalo = setInterval(() => {
        setContadorRegressivo((prev) => {
          if (prev === 1) {
            clearInterval(intervalo);
            dispatch(sortearNovoValor());
            return null;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(intervalo); // limpa se desmontar
    }
  }, [ganhou, dispatch]);

  return (
    <div className="display-card">
      <h2>Valor Atual</h2>
      <div className="display-valor">{valor}</div>

      {ganhou && (
        <div className="mensagem-ganhou">
          🎉 Parabéns! Você zerou o número! 🎉
          {contadorRegressivo !== null && (
            <p>Reiniciando em: {contadorRegressivo}...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayCard;
