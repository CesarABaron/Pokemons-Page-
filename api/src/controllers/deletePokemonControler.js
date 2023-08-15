const { Pokemon } = require("../db");

const deletePokemonControler = async (id) => {
  const old = await Pokemon.findByPk(id);

  const pokemonToDelete = await Pokemon.destroy({ where: { id: id } });
  if (pokemonToDelete === 1) {
    return { message: `The pokémon ${old.dataValues.name} whas eliminated` };
  }

  throw Error("No se encontro Pokemon con este id");
};

module.exports = { deletePokemonControler };
