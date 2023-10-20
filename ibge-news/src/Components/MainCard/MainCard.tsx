import { useEffect, useState } from 'react';
import { DataState } from '../../Redux/reducers/dataReducer';
import store from '../../Redux/store/dataStore';
import './MainCard.css';
import { ItemType } from '../../Utils/types';

function MainCard() {
  const [data, setData] = useState<ItemType | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png');

  store.subscribe(() => {
    const globalState: DataState = store.getState();
    if (globalState.data !== null) {
      setData(globalState.data.items[0]);
    }
  });

  useEffect(() => {
    if (data !== null) {
      const ibgeUrl = 'https://agenciadenoticias.ibge.gov.br/';
      const fullImageUrl = ibgeUrl + (JSON.parse(data.imagens?.replace(/\\/g, '')).image_intro);
      setImageUrl(fullImageUrl);
    }
  }, [data]);

  return (
    <div className="container__main-card">
      <div className="main-card__image">
        <img src={ imageUrl } alt="" height="250px" />
      </div>
      <div className="main-card__title">
        <h2>{data ? data.titulo : 'Título'}</h2>
      </div>
      <div className="main-card__description">
        <p>{data ? data.introducao : 'Título'}</p>
      </div>
    </div>
  );
}

export default MainCard;
