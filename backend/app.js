import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5001;
app.use(cors());

app.get("/", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10")
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

app.listen(port, () => {
  console.log(`App Listening on http://localhost:${port}`);
});
