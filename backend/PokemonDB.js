import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PokemonDataSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    types: { type: [String], required: true },
    abilities: { type: [String], required: true },
    img: { type: String, required: true },
  },
  { collection: "Pokemon" }
);

const pokemonData = mongoose.model("Pokemon", PokemonDataSchema);
export default pokemonData;
