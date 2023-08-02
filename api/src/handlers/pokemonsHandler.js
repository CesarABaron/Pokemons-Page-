const { getAllPokemonController, getPokemonsByName,postPokemonController,getPokemonByIdController } = require("../controllers/pokemonController");

const getPokemonsHandlers = async (req, res) => {
  try {
    const { name } = req.query;

    const response = name
      ? await getPokemonsByName(name)
      : await getAllPokemonController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
     postPokemonController(req.body)
    res.status(200).send("Was created correctly ")
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};


const getPokemonByIdHandler = async(req,res) =>{
try {
  const {id} = req.params
const response = await getPokemonByIdController(id)
console.log(response)
res.status(200).json(response)
} catch (error) {
res.status(400).json(error.message)
}


}
module.exports = {
  getPokemonsHandlers,
  postPokemonHandler,
  getPokemonByIdHandler,
};
