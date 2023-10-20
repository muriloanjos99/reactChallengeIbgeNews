import './MainCard.css';

function MainCard() {
  return (
    <div className="container__main-card">
      <div className="main-card__image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" alt="" height="250px" />
      </div>
      <div className="main-card__title">
        <h2>TEST TITLE</h2>
      </div>
      <div className="main-card__description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laboriosam nam qui aspernatur, cum laborum. Repellendus beatae perferendis minus fuga culpa voluptatum voluptates iste officia incidunt deserunt soluta, fugiat quisquam.</p>
      </div>
    </div>
  )
}

export default MainCard;