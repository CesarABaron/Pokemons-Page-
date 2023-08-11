const filterController = async (type, value, array) => {
  if (type === "type") {
    const byType = await array.filter((pokemon) => {
      if (pokemon.types.length === 2) {
        if (
          pokemon.types[0].name === value ||
          pokemon.types[1].name === value
        ) {
          return pokemon;
        }
      } else {
        if (pokemon.types[0].name === value) {
          return pokemon;
        }
      }
    });
    return byType;
  }

  if (type === "attack") {
    if (value === "descendente") {
      const byAttack = await array.sort((a, b) => a.attack - b.attack);
      return byAttack;
    }
    if (value === "ascendente") {
      const byAttack = await array.sort((a, b) => b.attack - a.attack);
      return byAttack;
    }
  }

  if (type === "alphabetical") {
    if (value === "AZ") {
      const byAlphabetic = array.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else return 0;
      });
      return byAlphabetic;
    }
    if (value === "ZA") {
      const byAlphabetic = array.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        } else return 0;
      });
      return byAlphabetic;
    }
  }

  if (type === "createdIn") {
    if (value === "DB") {
      const bycreatedIn = array.filter((pokemon) => {
        return pokemon.createdInDb === true;
      });
      return bycreatedIn;
    }
    if (value === "API") {
      const bycreatedIn = array.filter((pokemon) => {
        return pokemon.createdInDb === false;
      });
      return bycreatedIn;
    }
  }
};

module.exports = {
  filterController,
};
