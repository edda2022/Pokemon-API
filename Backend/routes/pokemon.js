const express = require('express')
const pokemonRouter = express.Router()
const {getPokemons, getPokemon} = require('../controller/pokemon')

pokemonRouter.get('/', getPokemons)
pokemonRouter.get('/:pokemonQuery', getPokemon)


module.exports = {
    pokemonRouter
}