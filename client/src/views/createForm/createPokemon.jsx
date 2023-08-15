import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllPokemons,
  postPokemon,
  updatePokemon,
} from "../../redux/actions";
import { useParams } from "react-router-dom";

import style from "./createPokemon.module.css";

const CreatePokemon = () => {
  const { id } = useParams();
  console.log("params", id);
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

  const handleChange = (e) => {
    if (e.target.name === "type") {
      const updatedTypes = e.target.checked
        ? [...input.type, e.target.value]
        : input.type.filter((type) => type !== e.target.value);

      setInput({ ...input, [e.target.name]: updatedTypes });

      setErrors(Validate({ ...input, type: updatedTypes }));
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });

      setErrors(Validate({ ...input, [e.target.name]: e.target.value }));
    }
  };

  const Validate = (input) => {
    const object = {
      name: "",
      image: "",
      health: "",
      attack: "",
      defense: "",
      type: "",
    };

    if (input.name.length === 0) {
      object.name = "Debe tener almenos una letra";
    } else if (input.name.length > 10) {
      object.name = "Como maximo debe tener 10 caracteres";
    }

    if (input.image.length > 0) {
      if (
        !/^(https?:\/\/)?(www\.)?[a-z0-9\-\.\/_]+\.(png|jpg|jpeg)$/i.test(
          input.image
        )
      ) {
        object.image = "Debe ser un link válido";
      }
    }

    if (
      input.health === "" ||
      isNaN(input.health) ||
      input.health <= 0 ||
      input.health > 100
    ) {
      object.health = "La vida debe ser un número entre 1 y 100";
    }

    if (
      input.defense === "" ||
      isNaN(input.defense) ||
      input.defense <= 0 ||
      input.defense > 100
    ) {
      object.defense = "La vida debe ser un número entre 1 y 100";
    }

    if (
      input.attack === "" ||
      isNaN(input.attack) ||
      input.attack <= 0 ||
      input.attack > 100
    ) {
      object.attack = "La vida debe ser un número entre 1 y 100";
    }

    if (input.type.length === 0) {
      object.type = "Debe seleccionar al menos un tipo";
    } else if (input.type.length > 2) {
      object.type = "Deben ser solo 2 tipos";
    }

    return object;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      const numericInput = {
        ...input,
        attack: parseInt(input.attack),
        defense: parseInt(input.defense),
        health: parseInt(input.health),
      };
      dispatch(postPokemon(numericInput), getAllPokemons);

      setInput({
        name: "",
        image: "",
        health: "",
        attack: "",
        defense: "",
        type: [],
      });

      return;
    }
    const numericInput = {
      ...input,
      attack: parseInt(input.attack),
      defense: parseInt(input.defense),
      health: parseInt(input.health),
    };

    dispatch(updatePokemon(id, numericInput));
  };

  return (
    <div className={style.container}>
      <div className={style.divForms}>
        <form className={style.Form} onSubmit={handleSubmit}>
          <div className={style.inputsContainer}>
            {!id ? (
              <h1 className={style.tittle}> Create Pokémon</h1>
            ) : (
              <h1 className={style.tittle}> Edit Pokémon</h1>
            )}
            <label>Name</label>
            <input
              value={input.name}
              onChange={handleChange}
              name="name"
            ></input>
            {errors.name && <p>{errors.name}</p>}
            <label>Image</label>
            <input
              value={input.image}
              onChange={handleChange}
              name="image"
            ></input>
            {errors.image && <p>{errors.image}</p>}
            <label>Health</label>
            <input
              onChange={handleChange}
              value={input.health}
              name="health"
            ></input>
            {errors.health && <p>{errors.health}</p>}
            <label>Attack</label>
            <input
              value={input.attack}
              onChange={handleChange}
              name="attack"
            ></input>
            {errors.attack && <p>{errors.attack}</p>}
            <label>Defense</label>
            <input
              value={input.defense}
              onChange={handleChange}
              name="defense"
            ></input>
            {errors.defense && <p>{errors.defense}</p>}
            <h1 className={style.typeTittle}>Choose type</h1>
            {errors.type && <p>{errors.type}</p>}
            <div className={style.allTypes}>
              <div className={style.div1}>
                <label>Water</label>
                <input
                  checked={input.type.includes("water")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="water"
                ></input>

                <label>Fire</label>
                <input
                  checked={input.type.includes("fire")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="fire"
                ></input>

                <label>Normal</label>
                <input
                  checked={input.type.includes("normal")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="normal"
                ></input>

                <label>Fighting</label>
                <input
                  checked={input.type.includes("fighting")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="fighting"
                ></input>
              </div>

              <div className={style.div2}>
                <label>Flying</label>
                <input
                  checked={input.type.includes("flying")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="flying"
                ></input>

                <label>Poison</label>
                <input
                  checked={input.type.includes("poison")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="poison"
                ></input>

                <label>Ground</label>
                <input
                  checked={input.type.includes("ground")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="ground"
                ></input>

                <label>Rock</label>
                <input
                  checked={input.type.includes("rock")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="rock"
                ></input>
              </div>

              <div className={style.div3}>
                <label>Bug</label>
                <input
                  checked={input.type.includes("bug")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="bug"
                ></input>

                <label>Ghost</label>
                <input
                  checked={input.type.includes("ghost")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="ghost"
                ></input>

                <label>Steel</label>
                <input
                  checked={input.type.includes("steel")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="steel"
                ></input>

                <label>Grass</label>
                <input
                  checked={input.type.includes("grass")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="grass"
                ></input>
              </div>

              <div className={style.div4}>
                <label>Electric</label>
                <input
                  checked={input.type.includes("electric")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="electric"
                ></input>

                <label>Psychic</label>
                <input
                  checked={input.type.includes("psychic")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="psychic"
                ></input>

                <label>Ice</label>
                <input
                  checked={input.type.includes("ice")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="ice"
                ></input>

                <label>Dragon</label>
                <input
                  checked={input.type.includes("dragon")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="dragon"
                ></input>
              </div>
              <div className={style.div5}>
                <label>Dark</label>
                <input
                  checked={input.type.includes("dark")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="dark"
                ></input>
                <label>Fairy</label>
                <input
                  checked={input.type.includes("fairy")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="fairy"
                ></input>

                <label>Unknown</label>
                <input
                  checked={input.type.includes("unknown")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="unknown"
                ></input>
                <label>Shadow</label>
                <input
                  checked={input.type.includes("shadow")}
                  onChange={handleChange}
                  name="type"
                  type="checkbox"
                  value="shadow"
                ></input>
              </div>
            </div>
            {Object.values(errors).every((error) => !error) && (
              <div className={style.submit}>
                <input type="submit" />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;
