const {
  updatePokemonController,
} = require("../controllers/updatePokemonController");

const updatePokemonHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    response = await updatePokemonController(id, body);
    res.status(200).json(response.message);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  updatePokemonHandler,
};
