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
      Filtros:
      <select name="type" onChange={handleChange}>
        <option value="getAll">Por tipo</option>
        <option value="fire">fire </option>
        <option value="normal">normal</option>
        <option value="fighting">fighting</option>
        <option value="flying">flying</option>
        <option value="poison">poison</option>
        <option value="ground">ground</option>
        <option value="rock">rock </option>
        <option value="bug">bug</option>
        <option value="ghost">ghost</option>
        <option value="water">water</option>
        <option value="grass">grass</option>
        <option value="electric">electric</option>
        <option value="psychic">psychic</option>
        <option value="ice">ice</option>
        <option value="dragon">dragon</option>
        <option value="dark">dark</option>
        <option value="fairy">fairy</option>
        <option value="unknown">unknown</option>
        <option value="shadow">shadow</option>
        <option value="steel">steel</option>
      </select>
      <select name="attack" onChange={handleChange}>
        <option> Filtrar por ataque </option>
        <option value="ascendente">Attack ⇑ </option>
        <option value="descendente">Attack ⇓</option>
      </select>
      <select name="alphabetical" onChange={handleChange}>
        <option> Filtrar por letras </option>
        <option value="AZ">A - Z ⇓ </option>
        <option value="ZA">Z - A ⇓</option>
      </select>
      <select onChange={handleChange} name="createdIn">
        <option> Creado en </option>
        <option value="DB">base de datos</option>
        <option value="API">api </option>
      </select>
    </div>
  );
};

export default Filter;
