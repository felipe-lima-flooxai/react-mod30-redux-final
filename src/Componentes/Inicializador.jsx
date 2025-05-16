import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { inicializar } from '../features/contadorSlice';

function Inicializador() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inicializar());
  }, [dispatch]);

  return null; // esse componente não precisa renderizar nada
}

export default Inicializador;
