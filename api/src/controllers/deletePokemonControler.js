const { Pokemon } = require("../db");

const deletePokemonControler = async (id) => {
  const pokemonToDelete = await Pokemon.destroy({ where: { id: id } });
  if (pokemonToDelete) {
    return pokemonToDelete;
  }

  throw Error("No se encontro Pokemon con este id");
};

module.exports = { deletePokemonControler };
