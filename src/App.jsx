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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <MainLayout>
        <Header></Header>

        <DisplayCard></DisplayCard>
        <BotaoIncrementar></BotaoIncrementar>
        <BotaoDecrementar></BotaoDecrementar>
        <BotaoDividir></BotaoDividir>
        <BotaoMultiplicar></BotaoMultiplicar>
      </MainLayout>
    </Provider>
      
    </>
  )
}

export default App
