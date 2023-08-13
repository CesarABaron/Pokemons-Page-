const {
  deletePokemonControler,
} = require("../controllers/deletePokemonControler");

const deletePokemonHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePokemonControler(id);
    res.status(200).send("fue eliminado exitosamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { deletePokemonHandler };
