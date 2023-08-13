import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const getallPokemonsAgain = () => {
    dispatch(getAllPokemons());
  };

  return (
    <div className={style.NavBar}>
      <h1
        className={style.pokemon}
        onClick={() => {
          getallPokemonsAgain();
        }}
      >
        Pokemon
      </h1>
      {location.pathname === "/home" && <SearchBar />}
      {location.pathname === "/home" && (
        <NavLink className={style.navLink} to="/create/id">
          <p> Create Pokemon</p>
        </NavLink>
      )}

      {!isHomePage && (
        <NavLink className={style.navLink} to="/home">
          <p> Home</p>
        </NavLink>
      )}

      <NavLink className={style.navLink} to="/about">
        <p> About</p>
      </NavLink>
    </div>
  );
};

export default NavBar;
