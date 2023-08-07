const { Router } = require("express");
const {
  getPokemonsHandlers,
  postPokemonHandler,
  getPokemonByIdHandler,
} = require("../handlers/pokemonsHandler");
const { validateForm } = require("../../tools/validateForm");
const {
  getPokemonsFilteredHandler,
} = require("../handlers/pokemonsFilteredHandler");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/pokemons/filter", getPokemonsFilteredHandler);
router.get("/pokemons", getPokemonsHandlers);
router.get("/pokemons/:id", getPokemonByIdHandler);
router.post("/pokemons", validateForm, postPokemonHandler);

module.exports = router;
