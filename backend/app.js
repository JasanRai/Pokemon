import express, { response } from "express";
import axios from "axios";
import cors from "cors";
import mongoose from "mongoose";
import PokemonModel from "./PokemonDB.js";

const app = express();
const port = 5001;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jsonrai:1234@cluster0.4lqdu.mongodb.net/PokemonDB",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
  // { useCreateIndex: true },
);

app.get("/", (req, res) => {
  res.send("Server up and running");
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=3")
    .then(async (response) => {
      const allPokemon = [];
      const pokeData = response.data.results;

      for (let i = 0; i < pokeData.length; i++) {
        let updatedPokeData = {};
        updatedPokeData["name"] = pokeData[i].name;

        const response = await axios.get(pokeData[i].url);
        updatedPokeData["types"] = response.data.types.map(
          (pokeType) => pokeType.type.name
        );

        updatedPokeData["img"] =
          response.data.sprites.other.dream_world.front_default;

        updatedPokeData["id"] = response.data.id;

        updatedPokeData["abilities"] = response.data.abilities.map(
          (pokeAbility) => pokeAbility.ability.name
        );

        allPokemon.push(updatedPokeData);
      }

      res.send(allPokemon);
    });
});

app.get("/seed-pokemon-data", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=200&limit=186"
  );

  const allPokemon = [];
  const pokeData = response.data.results;

  for (let i = 0; i < pokeData.length; i++) {
    let updatedPokeData = {};
    updatedPokeData["name"] = pokeData[i].name;

    const response = await axios.get(pokeData[i].url);
    updatedPokeData["types"] = response.data.types.map(
      (pokeType) => pokeType.type.name
    );

    updatedPokeData["img"] =
      response.data.sprites.other.dream_world.front_default;

    updatedPokeData["id"] = response.data.id;

    updatedPokeData["abilities"] = response.data.abilities.map(
      (pokeAbility) => pokeAbility.ability.name
    );

    allPokemon.push(updatedPokeData);
  }
  for (let i = 0; i < allPokemon.length; i++) {
    try {
      let currentPokemon = new PokemonModel({
        id: allPokemon[i].id,
        name: allPokemon[i].name,
        types: allPokemon[i].types,
        img: allPokemon[i].img,
        abilities: allPokemon[i].abilities,
      });
      await currentPokemon.save((err, doc) => {
        if (err) {
          return console.error(err);
        }
        console.log("Document inserted Successfully");
      });
    } catch (error) {
      console.log("failed");
    }
  }

  res.send("Data added");
});

app.get("/pokemon-data", async (req, res) => {
  //Promise resolution / Rejecting
  PokemonModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));

  /* //Async-await method
  const result = await PokemonModel.find();

  res.send(result); */
});

app.listen(port, () => {
  console.log(`App Listening on http://localhost:${port}`);
});
