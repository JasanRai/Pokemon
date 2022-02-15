import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PokemonDataSchema = new Schema({
  id: Number,
  name: String,
  types: String,
  abilities: String,
  img: String,
});

const pokemonData = mongoose.model("pokemon", PokemonDataSchema);
module.exports = pokemonData;
