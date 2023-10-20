import { useEffect } from 'react';
import './NewsSideCard.css';
import { ItemType } from '../../../Redux/actions/actionTypes';

interface SideCardProps {
  image: string;
  data: ItemType;
}

function NewsCard(props: SideCardProps) {
  const {image, data} = props;
  useEffect(() => {
    console.log();
  })

  return(
    <div className="container__newsSideCard">
      <div className='newsSideCard__content'>
        <img src={image} alt="" height="105vh" />
        <h3>{data?.titulo}</h3>
      </div>
      <div className='newsSideCard__link'>
        <button>Leia mais</button>
      </div>
    </div>
  )
}

export default NewsCard;