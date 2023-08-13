const {
  updatePokemonController,
} = require("../controllers/updatePokemonController");

const updatePokemonHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    response = await updatePokemonController(id, body);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("ha ocurrido un error ");
  }
};

module.exports = {
  updatePokemonHandler,
};
