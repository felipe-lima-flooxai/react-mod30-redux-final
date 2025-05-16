import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementarAleatorio } from '../features/contadorSlice';
import './BotaoGenerico.css';

function BotaoIncrementar() {
  const dispatch = useDispatch();

  return (
    <button className="botao-generico" onClick={() => dispatch(incrementarAleatorio())}>
      Incrementar 🔼
    </button>
  );
}

export default BotaoIncrementar;
