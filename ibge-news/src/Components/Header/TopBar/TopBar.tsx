import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { capitalizeFirstLetter } from '../../../Utils/constsAndFunctions';

import './TopBar.css';

function TopBar() {
  const currentDate: Date = new Date();
  const dayOfWeek = format(currentDate, 'EEEE', { locale: ptBR });
  const formattedDayOfWeek = capitalizeFirstLetter(dayOfWeek);
  const formattedDate = format(
    currentDate,
    "'dia' dd 'de' MMMM 'de' yyyy",
    { locale: ptBR },
  );

  return (
    <div className="topBar">
      <h3 className="fullDate">
        {formattedDayOfWeek}
        ,
        {' '}
        {formattedDate}
      </h3>
      <div className="divider" />
      <h3 className="middleText">
        Notícias fresquinhas!
      </h3>
      <div className="divider" />
      <h3 className="rightText">
        Fonte: Agência IBGE Notícias
      </h3>
    </div>
  );
}

export default TopBar;
