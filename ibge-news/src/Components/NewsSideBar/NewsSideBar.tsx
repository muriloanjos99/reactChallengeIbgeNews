import NewsCard from "./NewsSideCard/NewsSideCard";

import './NewsSideBar.css';

function NewsSideBar() {
  return (
    <div className="container__sideBar">
      <NewsCard />
      <hr />
      <NewsCard />
      <hr />
      <NewsCard />
    </div>
  )
}

export default NewsSideBar;