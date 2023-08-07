import {
  GETALLPOKEMONS,
  GETPOKEMONBYNAME,
  POSTPOKEMON,
  FILTERPOKEMON,
} from "../redux/actions";

let inicialState = {
  pokemons: [],
};

function rootReducer(state = inicialState, actions) {
  switch (actions.type) {
    case GETALLPOKEMONS:
      return {
        ...state,
        pokemons: actions.payload,
      };

    case GETPOKEMONBYNAME:
      return { ...state, pokemons: actions.payload };

    case POSTPOKEMON:
      return { ...state };

    case FILTERPOKEMON:
      return { ...state, pokemons: actions.payload };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
