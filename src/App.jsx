import { useState } from 'react'
import MainLayout from './Componentes/MainLayout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <header>
          <h1>Contador Global</h1>
          <p>Este projeto usa Redux para gerenciar o estado global do contador.</p>
        </header>

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
