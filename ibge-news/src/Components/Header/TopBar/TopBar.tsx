import { weekdays, months } from "../../../Utils/consts";

import './TopBar.css';

function TopBar() {
  const currentDate: Date = new Date();
  const date: number = currentDate.getDate();
  const day: number = currentDate.getDay();
  const month: number = currentDate.getMonth();
  const year: number = currentDate.getFullYear();
  
  const currentDay: string = weekdays[day];
  const currentMonth: string = months[month];

  return (
    <div className="topBar">
      <h3 className="fullDate">
        { currentDay }, dia { date } de { currentMonth } de { year }
      </h3>
      <div className="divider"/>
      <h3 className="middleText">
        Notícias fresquinhas! 
      </h3>
      <div className="divider"/>
      <h3 className="rightText">
        Fonte: Agência IBGE Notícias
      </h3>
    </div>
  )
}

export default TopBar;