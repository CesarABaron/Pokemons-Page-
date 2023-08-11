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
        className={style.input}
        onChange={handleChange}
        value={input.name}
        name="name"
        placeholder="Search Pokemon..."
      ></input>
      <div>
        <button
          className={style.button}
          onClick={() => {
            onSearch(input.name);
          }}
        ></button>
      </div>
    </div>
  );
};

export default SearchBar;
