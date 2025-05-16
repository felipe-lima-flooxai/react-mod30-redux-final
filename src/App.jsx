import { useState } from 'react'
import MainLayout from './Componentes/MainLayout'
import Header from './Componentes/Header'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './store/Store';
import DisplayCard from './Componentes/DisplayCard';
import BotaoIncrementar from './Componentes/BotaoIncrementar';
import BotaoDecrementar from './Componentes/BotaoDecrementar';
import BotaoDividir from './Componentes/BotaoDividir';
import BotaoMultiplicar from './Componentes/BotaoMultiplicar';
import Inicializador from './Componentes/Inicializador';
import ObjetivoDisplay from './Componentes/ObjetivoDisplay';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <MainLayout>
        <Inicializador></Inicializador>
        <Header></Header>

        <ObjetivoDisplay></ObjetivoDisplay>
        <DisplayCard></DisplayCard>
        <BotaoIncrementar></BotaoIncrementar>
        <BotaoDecrementar></BotaoDecrementar>
        <BotaoDividir></BotaoDividir>
        <BotaoMultiplicar></BotaoMultiplicar>
        <p style={{
          marginTop: "20px"
        }}> - Obrigado por jogar essa brincadeirinha que fiz, espero que tenha gostado - </p>
        <p>Felipe, 2025</p>
      </MainLayout>

    </Provider>
      
    </>
  )
}

export default App
