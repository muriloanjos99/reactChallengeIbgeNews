import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import './Layout.css';

function Layout() {
  return(
    <div className="container__HeaderOutlet">
      <div className="container__Header">
        <Header />
      </div>
      <div className="container__OutletContent">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
