import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valor: 0,
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
      state.ganhou = state.valor === 0;
    },
    // futuramente, ações para incrementar, multiplicar, dividir etc
  },
});

export const { setValor, resetar, incrementarAleatorio } = contadorSlice.actions;
export default contadorSlice.reducer;
