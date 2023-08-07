const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getTypesController = async () => {
  try {
    const dbInformation = await Type.findAll();
    if (dbInformation.length === 0) {
      const responseRaw = (await axios.get("https://pokeapi.co/api/v2/type"))
        .data.results;

      const responseFiltered = responseRaw.map((type) => type.name);

      for (let i = 0; i < responseFiltered.length; i++) {
        Type.create({ name: responseFiltered[i] });
      }
      console.log("La inf en la bd se ha creado correctamente");
    } else {
      console.log("La inf en la bd ya esta cargada");
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { getTypesController };
