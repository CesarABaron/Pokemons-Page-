const {
  deletePokemonControler,
} = require("../controllers/deletePokemonControler");

const deletePokemonHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deletePokemonControler(id);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { deletePokemonHandler };
