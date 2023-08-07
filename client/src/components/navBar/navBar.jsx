import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import style from "./navBar.module.css";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style.NavBar}>
      {location.pathname === "/home" && <SearchBar />}

      <NavLink className={style.navLink} to="/home">
        <p> Home</p>
      </NavLink>
      <NavLink className={style.navLink} to="/about">
        <p> About</p>
      </NavLink>

      <NavLink className={style.navLink} to="/create">
        <p> create</p>
      </NavLink>
    </div>
  );
};

export default NavBar;
