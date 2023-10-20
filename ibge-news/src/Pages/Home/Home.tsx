import MainCard from '../../Components/MainCard/MainCard';
import MenuBar from '../../Components/MenuBar/MenuBar';
import NewsCard from '../../Components/NewsCard/NewsCard';
import NewsSideBar from '../../Components/NewsSideBar/NewsSideBar';
import './Home.css';

function Home() {
  return (
    <div className='container__content'>
      <div className="container__allCards">
        <MainCard />
        <NewsSideBar />
      </div>
      <div className='container__menuBar'>
        <MenuBar />
      </div>
      <div className='container__newsCards'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <br />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default Home;