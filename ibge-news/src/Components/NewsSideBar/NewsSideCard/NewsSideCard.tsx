import './NewsSideCard.css';
import { useEffect, useState } from 'react';
import { ItemType } from '../../../Utils/types';

interface SideCardProps {
  data: ItemType;
}

function NewsCard(props: SideCardProps) {
  const { data } = props;
  const { imagens, titulo, link } = data;

  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const ibgeUrl = 'https://agenciadenoticias.ibge.gov.br/';
    const fullImageUrl = ibgeUrl + (JSON.parse(imagens.replace(/\\/g, '')).image_intro);
    setImageUrl(fullImageUrl);
  }, [data, imagens]);

  return (
    <div className="container__newsSideCard">
      <div className="newsSideCard__image">
        <img src={ imageUrl } alt="" width="190vh" />
      </div>
      <div className="container__titleLink">
        <div className="newsSideCard__title">
          <h3>{titulo}</h3>
        </div>
        <div className="newsSideCard__link">
          <button><a href={ link } target="_blank" rel="noreferrer">Leia mais</a></button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
