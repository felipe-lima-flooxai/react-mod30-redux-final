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
    // futuramente, ações para incrementar, multiplicar, dividir etc
  },
});

export const { setValor, resetar } = contadorSlice.actions;
export default contadorSlice.reducer;
