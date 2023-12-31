import axios from "axios";

export const GETALLPOKEMONS = "GETALLPOKEMONS";
export const GETPOKEMONBYNAME = "GETPOKEMONBYNAME";
export const POSTPOKEMON = "POSTPOKEMON";
export const FILTERPOKEMON = "FILTERPOKEMON";
export const PAGINATEPOKEMON = "PAGINATEPOKEMON";
export const DELETEPOKEMON = "DELETEPOKEMON";
export const UPDATEPOKEMON = "UPDATEPOKEMON";
export const GETPOKEMONBYID = "GETPOKEMONBYID";
export const CLEARDETAIL = "CLEARDETAIL";

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
      alert(response.data.message);
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
  return (dispatch) => {
    return dispatch({
      type: "PAGINATEPOKEMON",
      payload: paginado,
    });
  };
};

export const deletePokemon = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/pokemons/${id}`
      );

      alert(response.data.message);
      return dispatch({
        type: "DELETEPOKEMON",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const updatePokemon = (id, body) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/pokemons/${id}`,
        body
      );

      alert(response.data);
      return dispatch({
        type: "UPDATEPOKEMON",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const getPokemonByid = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);

      return dispatch({
        type: "GETPOKEMONBYID",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const clearDetail = () => {
  return (dispatch) => {
    return dispatch({
      type: "CLEARDETAIL",
    });
  };
};
