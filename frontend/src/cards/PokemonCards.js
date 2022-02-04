import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";

function PokemonCards(pokemon) {
  return (
    <Card
      style={{
        width: 300,
        height: 400,
        border: "3px solid",
        borderRadius: 5,
      }}
    >
      <CardMedia>
        <img
          src={pokemon.img}
          alt="poke"
          style={{
            width: 200,
            height: 200,
          }}
        />
      </CardMedia>

      <h4>Name</h4>
      <Typography>{pokemon.name}</Typography>
      <h4>Type</h4>
      <Typography>{pokemon.types}</Typography>
    </Card>
  );
}

export default PokemonCards;
