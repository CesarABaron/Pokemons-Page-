const Validate = (array) => {
  const clear = array.map((pok) => {
    if (!pok.name) {
      return null;
    }
    const health = pok.stats.find((poke) => poke.stat.name === "hp").base_stat;
    const attack = pok.stats.find(
      (poke) => poke.stat.name === "attack"
    ).base_stat;
    const defense = pok.stats.find(
      (poke) => poke.stat.name === "defense"
    ).base_stat;
    const typesArray = pok.types;
    const types = typesArray.map((x) => {
      return { name: x.type.name };
    });

    return {
      id: pok.id ? pok.id : "Undefined",
      name: pok.name,
      image: pok.sprites.front_default,
      health: health,
      attack: attack,
      defense: defense,
      types: types,
      createdInDb: false,
    };
  });

  return clear;
};

module.exports = {
  Validate,
};
