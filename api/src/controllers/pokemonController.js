const { Pokemon, Type } = require("../db");
const { Validate } = require("../../tools/validate");
const { Op } = require("sequelize");

const axios = require("axios");

const getPokemonsByName = async (name) => {
  const getDbPokemonRaw = await Pokemon.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: { model: Type, attributes: ["name"], through: { attributes: [] } },
  });

  const getDbPokemon = [];
  if (getDbPokemonRaw) {
    for (let i = 0; i < getDbPokemonRaw.length; i++) {
      getDbPokemon.push(getDbPokemonRaw[i].dataValues);
    }
  }

  let maxPokemon = 100;
  let pokemons = [];
  for (let i = 1; i <= maxPokemon; i++) {
    const apiResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${i}`
    );
    pokemons.push(apiResponse.data);
  }

  const apiResponseFiltered = Validate(pokemons);

  const pokemonFilteredApi = apiResponseFiltered.filter((pke) =>
    pke.name.includes(name.toLowerCase())
  );

  const response = [...getDbPokemon, ...pokemonFilteredApi];
  if (response.length) return response;
  throw Error("Pokemon not Found");
};

const getPokemonByIdController = async (id) => {
  if (id.length > 4) {
    const dbInformation = await Pokemon.findByPk(id);
    return dbInformation;
  } else {
    const apiPokemonRaw = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    let pokemon = [];
    pokemon.push(apiPokemonRaw.data);

    return Validate(pokemon);
  }
};

const getAllPokemonController = async () => {
  const getDbPokemon = await Pokemon.findAll({
    include: { model: Type, attributes: ["name"], through: { attributes: [] } },
  });

  let maxPokemon = 100;
  let pokemons = [];
  for (let i = 1; i <= maxPokemon; i++) {
    pokemons.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  const apiResponse = await Promise.all(pokemons);
  const apiReques = apiResponse.map((response) => response.data);

  const apiResponseFiltered = Validate(apiReques);

  return [...getDbPokemon, ...apiResponseFiltered];
};

const postPokemonController = async (pokemon) => {
  const result = await Pokemon.create(pokemon);

  const types = await Type.findAll({ where: { name: pokemon.type } });

  result.addType(types);

  return result;
};

module.exports = {
  getAllPokemonController,
  getPokemonsByName,
  postPokemonController,
  getPokemonByIdController,
};
