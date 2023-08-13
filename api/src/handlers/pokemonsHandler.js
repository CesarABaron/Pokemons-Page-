const {
  getAllPokemonController,
  getPokemonsByName,
  postPokemonController,
  getPokemonByIdController,
} = require("../controllers/pokemonController");

const getPokemonsHandlers = async (req, res) => {
  console.log("queryde all ", req.query);
  try {
    const { name } = req.query;

    const response = name
      ? await getPokemonsByName(name)
      : await getAllPokemonController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const response = await postPokemonController(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getPokemonByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getPokemonByIdController(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getPokemonsHandlers,
  postPokemonHandler,
  getPokemonByIdHandler,
};
