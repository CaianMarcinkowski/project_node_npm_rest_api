const { Router } = require("express");
const { allPokemons, allMoves, infoPokemons } = require("../api/pokeapi");

const router = require("express").Router();

router.get(`/allPokemons`, allPokemons);
router.get(`/allMoves`, allMoves);
router.post(`/infoPokemons`, infoPokemons);

module.exports = router;
