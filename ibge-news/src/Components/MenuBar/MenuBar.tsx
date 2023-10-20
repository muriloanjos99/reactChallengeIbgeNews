import { useState } from 'react';

import './MenuBar.css';

interface PropsType {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function MenuBar(props: PropsType) {
  const [activeButton, setActiveButton] = useState<string>('0');

  const { setFilter } = props;

  const handleButtonClick = (buttonNumber: string) => {
    setActiveButton(buttonNumber);
    const button = document.getElementById(`button_${buttonNumber}`) as HTMLButtonElement;
    setFilter(button?.value);
  };

  return (
    <div className="menuBar">
      <button
        className={ `menu-button ${activeButton === '0' ? 'active' : ''}` }
        id="button_0"
        onClick={ () => handleButtonClick('0') }
        value="recente"
      >
        Mais recentes
      </button>

      <button
        className={ `menu-button ${activeButton === '1' ? 'active' : ''}` }
        id="button_1"
        onClick={ () => handleButtonClick('1') }
        value="release"
      >
        Release
      </button>

      <button
        className={ `menu-button ${activeButton === '2' ? 'active' : ''}` }
        id="button_2"
        onClick={ () => handleButtonClick('2') }
        value="noticia"
      >
        Notícia
      </button>

      <button
        className={ `menu-button ${activeButton === '3' ? 'active' : ''}` }
        id="button_3"
        onClick={ () => handleButtonClick('3') }
        value="favoritos"
      >
        Favoritas
      </button>
    </div>
  );
}

export default MenuBar;
