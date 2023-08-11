import {
  GETALLPOKEMONS,
  GETPOKEMONBYNAME,
  POSTPOKEMON,
  FILTERPOKEMON,
  PAGINATEPOKEMON,
} from "../redux/actions";

let inicialState = {
  pokemons: [],
  pokemonsViews2: [],
  pokemonsFiltered: [],
};

function rootReducer(state = inicialState, actions) {
  switch (actions.type) {
    case GETALLPOKEMONS:
      return {
        ...state,
        pokemons: actions.payload,
        pokemonsViews2: actions.payload.slice(0, 12),
      };

    case GETPOKEMONBYNAME:
      return { ...state, pokemonsViews2: actions.payload };

    case POSTPOKEMON:
      return { ...state };

    case FILTERPOKEMON:
      return {
        ...state,
        pokemonsViews2: actions.payload.slice(0, 12),
        pokemons: actions.payload,
      };

    case PAGINATEPOKEMON:
      return {
        ...state,
        pokemonsViews2: state.pokemons.slice(
          actions.payload.num1,
          actions.payload.num2
        ),
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
