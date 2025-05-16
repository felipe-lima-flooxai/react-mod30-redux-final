import React from 'react';
import { useDispatch } from 'react-redux';
import { dividirAleatorio } from '../features/contadorSlice';
import './BotaoGenerico.css';

function BotaoDividir() {
  const dispatch = useDispatch();

  return (
    <button className="botao-generico" onClick={() => dispatch(dividirAleatorio())}>
      Dividir ➗
    </button>
  );
}

export default BotaoDividir;
