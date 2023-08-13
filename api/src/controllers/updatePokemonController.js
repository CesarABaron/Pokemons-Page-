const { Pokemon, Type } = require("../db");

const updatePokemonController = async (id, body) => {
  const update = await Pokemon.update(body, {
    where: { id: id },
  });

  const limpiar = await Pokemon.findByPk(id);

  await limpiar.setTypes([]);

  console.log(Pokemon);

  for (let i = 0; i < body.type.length; i++) {
    const type = await Type.findOne({ where: { name: body.type[i] } });
    await limpiar.addType(type);
  }

  return update;
};

module.exports = {
  updatePokemonController,
};
