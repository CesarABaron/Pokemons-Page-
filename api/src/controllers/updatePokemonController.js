const { Pokemon, Type } = require("../db");

const updatePokemonController = async (id, body) => {
  const old = await Pokemon.findByPk(id);

  try {
    const update = await Pokemon.update(body, {
      where: { id: id },
    });
    const limpiar = await Pokemon.findByPk(id);

    await limpiar.setTypes([]);

    for (let i = 0; i < body.type.length; i++) {
      const type = await Type.findOne({ where: { name: body.type[i] } });
      await limpiar.addType(type);
    }

    return {
      message: `the pokemon ${old.dataValues.name} was updated to ${body.name}`,
      update,
    };
  } catch (error) {
    throw Error("Error");
  }
};

module.exports = {
  updatePokemonController,
};
