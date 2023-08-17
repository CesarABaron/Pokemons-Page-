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
      console.log("The inf in the db has been created successfully");
    } else {
      console.log("The inf in the bd is already loaded");
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { getTypesController };
