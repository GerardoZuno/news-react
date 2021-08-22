import React, {useState,useEffect} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListNews from './components/ListNews'

function App() {

   const [categoria, setCategoria] = useState('')
   const [noticias, setNoticias] = useState([])


   useEffect(() => {
     const consultarApi = async () => {
       const API = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b8045afbb0d74d7dbe344a6254002d1a`
       const response = await fetch(API)
       const result = await response.json()
       setNoticias(result.articles)

     }
     consultarApi()
   }, [categoria])

  return (
    <>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Form setCategoria={setCategoria}/>
        <ListNews noticias={noticias}/>  
      </div>
    </>
  )
}

export default App

