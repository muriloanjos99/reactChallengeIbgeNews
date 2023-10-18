import Title from "./Title/Title";
import TopBar from "./TopBar/TopBar";

function Header() {
  return(
    <div className="header">
      <TopBar />
      <Title />
    </div>
  )
}

export default Header;