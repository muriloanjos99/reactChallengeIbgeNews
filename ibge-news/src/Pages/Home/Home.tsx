import { useEffect, useState } from 'react';
import MainCard from '../../Components/MainCard/MainCard';
import MenuBar from '../../Components/MenuBar/MenuBar';
import NewsCard from '../../Components/NewsCard/NewsCard';
import NewsSideBar from '../../Components/NewsSideBar/NewsSideBar';
import './Home.css';
import { DataType, FavType, ItemType } from '../../Utils/types';
import store from '../../Redux/store/dataStore';
import { DataState } from '../../Redux/reducers/dataReducer';

function Home() {
  const [smallCardsData, setSmallCardsData] = useState<DataType | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [fav, setFav] = useState<FavType[]>();
  const [items, setItems] = useState<FavType[] | ItemType[]>();

  store.subscribe(() => {
    const globalState: DataState = store.getState();
    if (globalState.favNews !== null) {
      setFav(globalState.favNews);
    }
  })

  useEffect(() => {
    let url = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=20&page=${page}`;
    
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
      const data = await response.json();
      setSmallCardsData(data);
    }
    switch (filter) {
      case 'release':
        url = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=20&page=${page}`;
        fetchData();
        break;
      case 'noticia':
        url = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=20&page=${page}`;
        fetchData();
        break;
    }
    fetchData();
  }, [filter, page]), [page];

  useEffect(() => {
    if (filter === 'favoritos') {
      setItems(fav);
    } else {
      setItems(smallCardsData?.items)
    }
  }, [fav, filter, smallCardsData?.items]);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage -= 1)    
  }

  const handleNextPage = () => {
    setPage((prevPage) => prevPage += 1)
  }


  return (
    <div className='container__content'>
      <div className="container__allCards">
        <MainCard />
        <NewsSideBar />
      </div>
      <div className='container__menuBar'>
        <MenuBar setFilter={setFilter}/>
      </div>
      <div className={`container__pageButtons ${filter === 'favoritos' ? 'disable__pageButtons' : ''}`}>
        <button
          className='previousButton'
          onClick={() => handlePreviousPage()}
          disabled={ page === 1 }
        >
          <img src="https://icons.veryicon.com/png/o/business/crm-system-icon/double-left-arrow.png" alt="" height={'50px'}/>
        </button>
        <h2>{`Página ${page}`}</h2>
        <button
          className='nextButton'
          onClick={() => handleNextPage()}
          disabled={ page === smallCardsData?.totalPages }
        >
          <img src="https://icons.veryicon.com/png/o/business/crm-system-icon/double-left-arrow.png" alt="" height={'50px'}/>
        </button>
      </div>
      <div className='container__newsCards'>
        {items?.map((news, index) => {
          return (
            <NewsCard key={index} data={news} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;