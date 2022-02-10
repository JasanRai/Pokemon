import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Ability from "../components/Ability";
import TypeTag from "../components/TypeTag";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create("transform", {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

function PokemonCard(props) {
  const typesArray = props.types;
  const id = props.id;
  const name = props.name;
  const abilities = props.abilities;
  const img = props.img;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let color = "";
  let contentColor = "";

  if (typesArray[0] === "fire") {
    color = "rgba(245,3,0, 1)";
    contentColor = "#fb8375";
  }
  if (typesArray[0] === "water") {
    color = "rgba(83,177,248, 1)";
    contentColor = "#73c8f3";
  }
  if (typesArray[0] === "grass") {
    color = "rgba(35, 190, 77 , 1)";
    contentColor = "#80f29e";
  }
  if (typesArray[0] === "flying") {
    color = "brown";
    contentColor = "#fb8375";
  }
  if (typesArray[0] === "poison") {
    color = "purple";
    contentColor = "#fb8375";
  }
  if (typesArray[0] === "bug") {
    color = "darkgreen";
    contentColor = "#7bc389";
  }

  /*    props:
      {
        key:'key',
        img:'img_url'
        name:'name",
        types:'[type1,type2]'
      } */

  return (
    <Card
      style={{
        background: `${color}`,
        width: 300,
        border: "3px solid",
        borderRadius: 5,
        marginTop: 20,
      }}
    >
      <div
        style={{
          background: `${contentColor}`,
          margin: 5,
          height: "97%",
          borderRadius: 3,
        }}
      >
        <Grid
          container
          style={{
            height: 40,
          }}
        >
          <Grid
            item
            xs={8}
            style={{
              marginTop: 2,
              border: "1px solid",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              background: "rgba(255,255,255, 0.9)",
            }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "fantasy",
                fontWeight: "bolder",
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              marginTop: 2,
              border: "1px solid",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              background: "rgba(255,255,255, 0.9)",
            }}
          >
            <Typography style={{ fontFamily: "fantasy", fontWeight: "bolder" }}>
              # {id}
            </Typography>
          </Grid>
        </Grid>

        <Box
          display={"flex"}
          justifyContent={"center"}
          marginTop={2}
          borderRadius={3}
          style={{ background: "#fff" }}
        >
          <img
            src={img}
            alt="poke"
            style={{
              width: 200,
              height: 200,
              borderRadius: 5,
            }}
          />
        </Box>
        <div style={{ borderRadius: 10 }}>
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              height: 20,
              margin: 10,
            }}
          >
            Type(s)
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: 20,
              background: "rgba(255,255,255, 0.9)",
            }}
          >
            {typesArray.map((type) => (
              <TypeTag types={type} />
            ))}
          </div>
          <Typography style={{ display: "flex" }}>
            <Grid container>
              <Grid
                item
                xs={10}
                // style={{
                //   display: "flex",
                //   justifyContent: "center",
                // }}
              >
                <h4 style={{ marginLeft: 10, fontSize: 14 }}>More Details:</h4>
              </Grid>
              <Grid
                item
                xs={2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ExpandMore expand={expanded} onClick={handleExpandClick}>
                  <ExpandMoreIcon />
                </ExpandMore>
              </Grid>
            </Grid>
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                <h5
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: 20,
                    margin: 10,
                  }}
                >
                  Ability
                </h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 20,
                    background: "rgba(255,255,255, 0.9)",
                  }}
                >
                  <Grid container display={"flex"}>
                    {abilities.map((ability) => {
                      return (
                        <Grid
                          item
                          xs={6}
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <Ability abilities={ability} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
