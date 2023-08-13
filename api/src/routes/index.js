const { Router } = require("express");
const {
  getPokemonsHandlers,
  postPokemonHandler,
  getPokemonByIdHandler,
} = require("../handlers/pokemonsHandler");
const { deletePokemonHandler } = require("../handlers/deletePokemonHandler");
const { validateForm } = require("../../tools/validateForm");
const {
  getPokemonsFilteredHandler,
} = require("../handlers/pokemonsFilteredHandler");
const { updatePokemonHandler } = require("../handlers/updatePokemonHandler");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/pokemons/filter", getPokemonsFilteredHandler);
router.get("/pokemons", getPokemonsHandlers);
router.get("/pokemons/:id", getPokemonByIdHandler);
router.post("/pokemons", validateForm, postPokemonHandler);
router.delete("/pokemons/:id", deletePokemonHandler);
router.put("/pokemons/:id", updatePokemonHandler);

module.exports = router;
