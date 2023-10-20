import { parse } from 'date-fns';
import { FavType, ItemType } from '../../Utils/types';
import './NewsCard.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Redux/actions/dataActions';
import store from '../../Redux/store/dataStore';
import { DataState } from '../../Redux/reducers/dataReducer';

interface PropsType {
  data: ItemType | FavType;
} 

function NewsCard(props: PropsType) {
  const dispatch = useDispatch();

  const [when, setWhen] = useState<number>(0);
  const [favNews, setFavNews] = useState<FavType[]>();

  const { data } = props;

  const { titulo, introducao, link, data_publicacao } = data;

  const favObj: FavType = {
    titulo,
    introducao,
    link,
    data_publicacao
  }

  useEffect(() => {
    const dataPublicacao: Date = parse(data_publicacao, 'dd/MM/yyyy HH:mm:ss', new Date());
    const dataAtual: Date = new Date();
    const diferencaEmMilissegundos: number = dataAtual.getTime() - dataPublicacao.getTime();
    const diferencaEmDias: number = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    setWhen(diferencaEmDias)
  }, [data_publicacao])

  store.subscribe(() => {
    const globalState: DataState = store.getState();
    if (globalState.favNews !== null) {
      setFavNews(globalState.favNews);
    }
  })

  const isFavorited = favNews?.some(news => news.link === link);

  const handleFavClick = () => {
    if (isFavorited) {
      dispatch(removeFavorite(favObj))
    } else {
      dispatch(addFavorite(favObj))
    }
  }

  return(
    <div className="container__news-card">
      <div className="news-card__content">
        <h3>{ titulo }</h3>
        <p>{ introducao }</p>
        <p>{ when === 1 ? `Publicado há ${when} dia` : `Publicado há ${when} dias`}</p>
      </div>
      < hr />
      <div className="news-card__buttons">
        <button><a href={link} target='_blank'>Leia a notícia completa!</a></button>
        <button onClick={handleFavClick}>
          <img
            src={isFavorited ? 'https://cdn-icons-png.flaticon.com/512/833/833472.png' : 'https://cdn-icons-png.flaticon.com/512/833/833300.png'}
            alt=""
            width={'30px'}
          />
        </button>
      </div>
    </div>
  )
}

export default NewsCard;
