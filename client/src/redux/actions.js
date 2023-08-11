import axios from "axios";

export const GETALLPOKEMONS = "GETALLPOKEMONS";
export const GETPOKEMONBYNAME = "GETPOKEMONBYNAME";
export const POSTPOKEMON = "POSTPOKEMON";
export const FILTERPOKEMON = "FILTERPOKEMON";
export const PAGINATEPOKEMON = "PAGINATEPOKEMON";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const response = await axios("http://localhost:3001/pokemons");
    return dispatch({
      type: "GETALLPOKEMONS",
      payload: response.data,
    });
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({
        type: "GETPOKEMONBYNAME",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons",
        pokemon
      );
      alert("Se ha creado con exito");
      return dispatch({
        type: "POSTPOKEMON",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const filterPokemon = (key, value, body) => {
  console.log("key", key, "value", value);
  return async (dispatch) => {
    const params = { [key]: value };
    try {
      const response = await axios.post(
        `http://localhost:3001/pokemons/filter`,
        body,
        { params }
      );
      return dispatch({
        type: "FILTERPOKEMON",
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const paginatePokemon = (paginado) => {
  console.log(paginado);
  return (dispatch) => {
    return dispatch({
      type: "PAGINATEPOKEMON",
      payload: paginado,
    });
  };
};
