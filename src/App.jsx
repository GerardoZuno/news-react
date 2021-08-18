import React, {useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'

function App() {

   const [categoria, setCategoria] = useState('')

  return (
    <>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Form setCategoria={setCategoria}/>

      </div>
    </>
  )
}

export default App

