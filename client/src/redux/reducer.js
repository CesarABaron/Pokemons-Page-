import {
  GETALLPOKEMONS,
  GETPOKEMONBYNAME,
  POSTPOKEMON,
  FILTERPOKEMON,
  PAGINATEPOKEMON,
  DELETEPOKEMON,
  UPDATEPOKEMON,
  GETPOKEMONBYID,
  CLEARDETAIL,
} from "../redux/actions";

let inicialState = {
  pokemons: [],
  pokemonsViews2: [],
  pokemonsById: [],
  pokemonsById2: [],
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

    case DELETEPOKEMON:
      return {
        ...state,
      };

    case UPDATEPOKEMON:
      return {
        ...state,
      };

    case GETPOKEMONBYID:
      return {
        ...state,
        pokemonsById: actions.payload,
        pokemonsById2: actions.payload,
      };

    case CLEARDETAIL:
      return {
        ...state,
        pokemonsById: {},
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
