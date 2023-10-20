import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDataFailure, fetchDataSuccess } from './Redux/actions/dataActions';

import './App.css';

import NotFound from './Pages/NotFound/NotFound';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');

        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure((error as Error).message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout />
        }
      >
        <Route index element={ <Home /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
