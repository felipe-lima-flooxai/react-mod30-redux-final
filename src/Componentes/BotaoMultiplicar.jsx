import React from 'react';
import { useDispatch } from 'react-redux';
import { multiplicarAleatorio } from '../features/contadorSlice';
import './BotaoGenerico.css';

function BotaoMultiplicar() {
  const dispatch = useDispatch();

  return (
    <button className="botao-generico" onClick={() => dispatch(multiplicarAleatorio())}>
      Multiplicar ✖️
    </button>
  );
}

export default BotaoMultiplicar;
