import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import style from "./searchBar.module.css";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ name: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ [e.target.name]: e.target.value });
  };

  const onSearch = (name) => {
    dispatch(getPokemonByName(name));
  };

  return (
    <div className={style.SearchBar}>
      <input
        onChange={handleChange}
        value={input.name}
        name="name"
        placeholder="Pokemon"
      ></input>
      <button
        onClick={() => {
          onSearch(input.name);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
