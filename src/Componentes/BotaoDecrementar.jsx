import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementarAleatorio } from '../features/contadorSlice';
import './BotaoGenerico.css';

function BotaoDecrementar() {
  const dispatch = useDispatch();

  return (
    <button className="botao-generico" onClick={() => dispatch(decrementarAleatorio())}>
      Decrementar 🔽
    </button>
  );
}

export default BotaoDecrementar;
