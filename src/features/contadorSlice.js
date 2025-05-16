import { createSlice } from '@reduxjs/toolkit';

function sortearObjetivo() {
  return Math.floor(Math.random() * 300) - 150; // -1000 a +1000
}

const initialState = {
  valor: 0,
  objetivo: 0,
  ganhou: false,
};

const contadorSlice = createSlice({
  name: 'contador',
  initialState,
  reducers: {
    setValor(state, action) {
      state.valor = action.payload;
      state.ganhou = state.valor === 0;
    },
    resetar(state) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      state.valor = numeroAleatorio;
      state.ganhou = false;
    },
    incrementarAleatorio(state) {
      const incremento = Math.floor(Math.random() * 10) + 1; // 1 a 10
      state.valor += incremento;
      state.ganhou = state.valor === state.objetivo;
    },
    decrementarAleatorio(state) {
      const decremento = Math.floor(Math.random() * 10) + 1; // 1 a 10
      state.valor -= decremento;
      state.ganhou = state.valor === state.objetivo;
    },
    multiplicarAleatorio(state) {
      const fator = Math.floor(Math.random() * 5) + 2; // 2 a 6
      state.valor *= fator;
      state.ganhou = state.valor === state.objetivo;
    },

    dividirAleatorio(state) {
      const divisor = Math.floor(Math.random() * 5) + 2; // 2 a 6
      state.valor = Math.trunc(state.valor / divisor); // trunca pra manter inteiro
      state.ganhou = state.valor === state.objetivo;
    },
    sortearNovoValor(state) {
      const novoValor = Math.floor(Math.random() * 300) - 150; // -1.000.000 a +1.000.000
      state.valor = novoValor;
      state.objetivo = sortearObjetivo();
      state.ganhou = false;
    },
    inicializar(state) {
      const valorInicial = Math.floor(Math.random() * 300) - 150; // -1000 a +1000
      state.valor = valorInicial;
      state.objetivo = sortearObjetivo();
      state.ganhou = state.valor === state.objetivo;
    },

    // futuramente, ações para incrementar, multiplicar, dividir etc
  },
});

export const { setValor, resetar, incrementarAleatorio, decrementarAleatorio, 
  dividirAleatorio, multiplicarAleatorio, sortearNovoValor, inicializar } = contadorSlice.actions;
export default contadorSlice.reducer;
