import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

import './App.css'
import NewsDetails from './Pages/NewsDetails/NewsDetails'

function App() {
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
