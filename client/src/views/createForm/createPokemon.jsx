import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemon } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CreatePokemon = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    type: [],
  });

  const [errors, setErros] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    type: "",
  });

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

      setErros({ [e.target.name]: e.target.value });
    }
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={input.name} onChange={handleChange} name="name"></input>

        <label>Image</label>
        <input value={input.image} onChange={handleChange} name="image"></input>

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

        <h1>type</h1>
        <br></br>

        <label>water</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="water"
        ></input>

        <label>fire</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="fire"
        ></input>

        <label>normal</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="normal"
        ></input>

        <label>fighting</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="fighting"
        ></input>

        <label>flying</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="flying"
        ></input>

        <label>poison</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="poison"
        ></input>

        <label>ground</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="ground"
        ></input>

        <label>rock</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="rock"
        ></input>

        <label>bug</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="bug"
        ></input>

        <label>ghost</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="ghost"
        ></input>

        <label>steel</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="steel"
        ></input>

        <label>grass</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="grass"
        ></input>

        <label>electric</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="electric"
        ></input>

        <label>psychic</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="psychic"
        ></input>

        <label>ice</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="ice"
        ></input>

        <label>dragon</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="dragon"
        ></input>

        <label>dark</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="dark"
        ></input>

        <label>fairy</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="fairy"
        ></input>

        <label>unknown</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="unknown"
        ></input>

        <label>shadow</label>
        <input
          onChange={handleChange}
          name="type"
          type="checkbox"
          value="shadow"
        ></input>

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePokemon;
