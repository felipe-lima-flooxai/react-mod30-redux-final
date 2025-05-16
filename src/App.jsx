import { useState } from 'react'
import MainLayout from './Componentes/MainLayout'
import Header from './Componentes/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <Header></Header>

        <section>
          {/* Aqui virá o card do contador */}
        </section>

        <section style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {/* Aqui virão os botões, lado a lado */}
        </section>
      </MainLayout>
    </>
  )
}

export default App
