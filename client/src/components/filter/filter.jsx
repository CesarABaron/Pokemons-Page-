import { useDispatch } from "react-redux";
import { filterPokemon } from "../../redux/actions";
import style from "./filter.module.css";
import { useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);

  const handleChange = (e) => {
    dispatch(filterPokemon(e.target.name, e.target.value, pokemons));
  };

  return (
    <div className={style.filtros}>
      Sort By
      <select className={style.select} name="type" onChange={handleChange}>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fire">Fire</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock </option>
        <option value="water">Water</option>
        <option value="getAll">Type</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
        <option value="steel">Steel</option>
      </select>
      <select className={style.select} name="attack" onChange={handleChange}>
        <option> Attack </option>
        <option value="ascendente">Attack ⇑ </option>
        <option value="descendente">Attack ⇓</option>
      </select>
      <select
        className={style.select}
        name="alphabetical"
        onChange={handleChange}
      >
        <option> Alphabetical </option>
        <option value="AZ">Alphabetical ⇓ </option>
        <option value="ZA">Alphabetical ⇑</option>
      </select>
      <select className={style.select} onChange={handleChange} name="createdIn">
        <option> Created in </option>
        <option value="DB">Data Base</option>
        <option value="API">Api</option>
      </select>
    </div>
  );
};

export default Filter;
