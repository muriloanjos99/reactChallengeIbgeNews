import Title from "./Title/Title";
import TopBar from "./TopBar/TopBar";

import './Header.css'

function Header() {
  return(
    <div className="header">
      <TopBar />
      <Title />
    </div>
  )
}

export default Header;