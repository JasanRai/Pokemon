import { Grid, MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import PokemonCard from "../cards/PokemonCard";
import PokeImage from "../images/firstpokemons.jpg";

const pokemonStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    minWidth: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${PokeImage})`,
    backgroundSize: "contain",
  },
});

function Pokemon() {
  const classes = pokemonStyles();
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonTitle, setPokemonTitle] = useState("");

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
        style={{
          display: "flex",
          justifyContent: "center",
          height: 150,
          alignItems: "center",
          background: "transparent",
          fontSize: 30,
          fontFamily: "fantasy",
          fontWeight: "bolder",
        }}
      >
        {pokemonTitle}Pokemons
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "white",
        }}
      >
        <TextField
          id="selectType"
          select
          label="Select"
          value={pokemonData.types}
          helperText="Select Pokemon Type"
        >
          {pokemonData.map((option) => (
            <MenuItem key={option.id} value={option.types}>
              {option.types}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <Grid container display={"flex"} justifyContent={"center"}>
        {pokemonData.map((pokemon) => {
          return (
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                img={pokemon.img}
                abilities={pokemon.abilities}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Pokemon;
