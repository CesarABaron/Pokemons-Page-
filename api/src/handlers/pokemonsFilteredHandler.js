const { filterController } = require("../controllers/FilterController");
const { getAllPokemonController } = require("../controllers/pokemonController");

const getPokemonsFilteredHandler = async (req, res) => {
  const array = req.body;
  const value = Object.values(req.query)[0];
  const type = Object.keys(req.query)[0];

  if (
    type === "type" ||
    type === "attack" ||
    type === "alphabetical" ||
    type === "createdIn"
  ) {
    try {
      const response = await filterController(type, value, array);
      const response2 = await getAllPokemonController();
      const response3 = await filterController(type, value, response2);
      if (response.length === 0 && value === "getAll") {
        return res.status(200).json(response2);
      } else if (response.length === 0) {
        return res.status(200).json(response3);
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};

module.exports = { getPokemonsFilteredHandler };
