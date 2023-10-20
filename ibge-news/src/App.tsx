import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import NewsDetails from './Pages/NewsDetails/NewsDetails'

import './App.css'
import { useDispatch } from 'react-redux'
import { fetchDataSuccess } from './Redux/actions/dataActions'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100");
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    }
        fetchData()
  });

  return (
    <Routes>
        <Route path='/' element={ 
          <Layout /> 
        }>
          <Route index element={ <Home /> } />
          <Route path=':id' element={ <NewsDetails /> } />
        </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
