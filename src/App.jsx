import { useState } from 'react'
import MainLayout from './Componentes/MainLayout'
import Header from './Componentes/Header'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './store/Store';
import DisplayCard from './Componentes/DisplayCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <MainLayout>
        <Header></Header>

        <DisplayCard>

        </DisplayCard>
      </MainLayout>
    </Provider>
      
    </>
  )
}

export default App
