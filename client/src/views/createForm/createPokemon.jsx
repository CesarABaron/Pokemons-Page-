import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemon } from "../../redux/actions";

import style from "./createPokemon.module.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    type: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    type: "",
  });

  console.log(errors);

  const handleChange = (e) => {
    if (e.target.name === "type") {
      if (e.target.checked === true) {
        setInput({
          ...input,
          [e.target.name]: [...input.type, e.target.value],
        });
      } else if (e.target.checked === false) {
        setInput({
          ...input,
          [e.target.name]: input.type.filter((type) => type !== e.target.value),
        });
      }
    } else if (
      e.target.name === "health" ||
      e.target.name === "attack" ||
      e.target.name === "defense"
    ) {
      const health = Number(e.target.value);

      setInput({ ...input, [e.target.name]: health });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });

      Validate({ [e.target.name]: e.target.value });
    }
  };

  const Validate = (input) => {
    if (!input.name) {
      setErrors({ ...errors, name: "" });
    }
    setErrors({ ...errors, name: "invalid name" });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));

    return setInput({
      name: "",
      image: "",
      health: "",
      attack: "",
      defense: "",
      type: [],
    });
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputsContainer}>
            <label>Name</label>
            <input
              value={input.name}
              onChange={handleChange}
              name="name"
            ></input>

            <label>Image</label>
            <input
              value={input.image}
              onChange={handleChange}
              name="image"
            ></input>
            {!errors.image ? null : <p>error </p>}

            <label>health</label>
            <input
              onChange={handleChange}
              value={input.health}
              name="health"
            ></input>

            <label>attack</label>
            <input
              value={input.attack}
              onChange={handleChange}
              name="attack"
            ></input>

            <label>defense</label>
            <input
              value={input.defense}
              onChange={handleChange}
              name="defense"
            ></input>
          </div>

          <h1>type</h1>
          <div className={style.allTypes}>
            <div className={style.div1}>
              <label>Water</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="water"
              ></input>

              <label>Fire</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="fire"
              ></input>

              <label>Normal</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="normal"
              ></input>

              <label>Fighting</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="fighting"
              ></input>
            </div>

            <div className={style.div2}>
              <label>Flying</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="flying"
              ></input>

              <label>Poison</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="poison"
              ></input>

              <label>Ground</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="ground"
              ></input>

              <label>Rock</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="rock"
              ></input>
            </div>

            <div className={style.div3}>
              <label>Bug</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="bug"
              ></input>

              <label>Ghost</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="ghost"
              ></input>

              <label>Steel</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="steel"
              ></input>

              <label>Grass</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="grass"
              ></input>
            </div>

            <div className={style.div4}>
              <label>Electric</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="electric"
              ></input>

              <label>Psychic</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="psychic"
              ></input>

              <label>Ice</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="ice"
              ></input>

              <label>Dragon</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="dragon"
              ></input>
            </div>
            <div className={style.div5}>
              <label>Dark</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="dark"
              ></input>

              <label>Fairy</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="fairy"
              ></input>

              <label>Unknown</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="unknown"
              ></input>

              <label>Shadow</label>
              <input
                onChange={handleChange}
                name="type"
                type="checkbox"
                value="shadow"
              ></input>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
      <form className={style.form2}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </form>
    </div>
  );
};

export default CreatePokemon;
