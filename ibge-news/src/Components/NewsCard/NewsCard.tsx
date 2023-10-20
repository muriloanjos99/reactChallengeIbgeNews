import './NewsCard.css'

function NewsCard() {
  return(
    <div className="container__news-card">
      <div className="news-card__content">
        <h3>Título</h3>
        <p>Descrição da notícia</p>
        <p>2 dias atrás</p>
      </div>
      <hr />
      <div className="news-card__buttons">
        <button>Leia a notícia completa!</button>
        <button>Favorite</button>
      </div>
    </div>
  )
}

export default NewsCard;
