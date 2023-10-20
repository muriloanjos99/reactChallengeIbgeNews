import { useState } from "react";

import './MenuBar.css';

function MenuBar() {
  const [activeButton, setActiveButton] = useState<string>('0'); // Estado para armazenar o botão ativo
  
  const handleButtonClick = (buttonclassName: string) => {
    setActiveButton(buttonclassName);
  };

  return (
    <div className="menuBar">
      <button 
        className={`menu-button ${activeButton === '0' ? 'active' : ''}`}
        onClick={() => handleButtonClick('0')}
      >
        Mais recentes
      </button>
      
      <button
        className={`menu-button ${activeButton === '1' ? 'active' : ''}`}
        onClick={() => handleButtonClick('1')}
      >
        Release
      </button>
      
      <button
        className={`menu-button ${activeButton === '2' ? 'active' : ''}`}
        onClick={() => handleButtonClick('2')}
      >
        Notícia
      </button>

      <button
        className={`menu-button ${activeButton === '3' ? 'active' : ''}`}
        onClick={() => handleButtonClick('3')}
      >
        Favoritas
      </button>
    </div>
  )
}

export default MenuBar;