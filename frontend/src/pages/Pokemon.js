import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import PokemonCards from "../cards/PokemonCards";

const pokemonStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
  },
});

function Pokemon() {
  const classes = pokemonStyles();
  const [pokemonData, setPokemonData] = useState([]);
  console.log(pokemonData);

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemonData(pokemon);
      });
  }, []);

  return (
    <div className={classes.container}>
      <header
        className={classes.header}
        style={{ display: "flex", justifyContent: "center" }}
      >
        Pokemons
      </header>

      <Grid container display={"flex"} justifyContent={"center"}>
        {pokemonData.map((pokemon) => {
          return (
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <PokemonCards
                key={pokemon.id}
                name={pokemon.name}
                type={pokemon.types}
                img={pokemon.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Pokemon;
