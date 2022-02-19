import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
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
  const typesArray = props.c;
  const id = props.a;
  const name = props.b;
  const abilities = props.e;
  const img = props.d;
  const [expanded, setExpanded] = useState(false);

  console.log("something");

  const maleIncidence = Math.floor(Math.random() * 100);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    background: "#e078e9",
    [`&.${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    },
  }));

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
    color = "rgba(35,190,77,1)";
    contentColor = "#80f29e";
  }
  // if (typesArray[0] === "flying") {
  //   color = "brown";
  //   contentColor = "#fb8375";
  // }
  if (typesArray[0] === "poison") {
    color = "#bf19fc";
    contentColor = "#dd83fd";
  }
  if (typesArray[0] === "bug") {
    color = "darkgreen";
    contentColor = "#7bc389";
  }
  if (typesArray[0] === "electric") {
    color = "#bccf2e";
    contentColor = "#faff77";
  }
  if (typesArray[0] === "psychic") {
    color = "rgba(190,46,179,1)";
    contentColor = "#ff77ce";
  }
  if (typesArray[0] === "rock") {
    color = "rgba(134,100,26,1)";
    contentColor = "#e2c588";
  }
  if (typesArray[0] === "normal") {
    color = "#a9a79e";
    contentColor = "#dad9d5";
  }
  if (typesArray[0] === "steel") {
    color = "#6f7185";
    contentColor = "#a1a3b1";
  }
  if (typesArray[0] === "fairy") {
    color = "#fc70d4";
    contentColor = "#fd9ee2";
  }
  if (typesArray[0] === "ground") {
    color = "#c4a76c";
    contentColor = "#d7c49c";
  }
  if (typesArray[0] === "dark") {
    color = "#4d4d4e";
    contentColor = "#828283";
  }
  if (typesArray[0] === "ice") {
    color = "#1ab8ff";
    contentColor = "#93deff";
  }
  if (typesArray[0] === "ghost") {
    color = "#7c5fb9";
    contentColor = "#af9ed5";
  }
  if (typesArray[0] === "fighting") {
    color = "#8f4d5e";
    contentColor = "#c3909d";
  }
  if (typesArray[0] === "dragon") {
    color = "#7809f1";
    contentColor = "#b678fa";
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
          padding: 5,
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

        <Typography
          style={{
            display: "flex",
            marginTop: 2,
            justifyContent: "center",
          }}
        >
          Gender Ratio :{" "}
        </Typography>
        <Box
          style={{
            background: "white",
            marginTop: 2,
            padding: 10,
            borderRadius: 10,
            position: "relative",
          }}
        >
          <Box
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              marginTop: 2,
              padding: 10,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              width: 260,
              zIndex: 1000,
            }}
          >
            <Tooltip title="Male">
              <div
                style={{
                  width: `${maleIncidence}%`,
                  background: "transparent",
                  color: "transparent",
                }}
              >
                &nbsp; {/* nbsp is html character for  non breaking space */}
              </div>
            </Tooltip>
            <Tooltip title="Female">
              <div
                style={{
                  width: `${100 - maleIncidence}%`,
                  background: "transparent",
                  color: "transparent",
                }}
              >
                &nbsp;
              </div>
            </Tooltip>
          </Box>
          <BorderLinearProgress
            variant="determinate"
            value={maleIncidence}
          ></BorderLinearProgress>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              left: 0,
              top: 0,
            }}
          >
            {maleIncidence === 0 ? null : (
              <Typography
                style={{
                  width: `${maleIncidence}%`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {maleIncidence}%{" "}
              </Typography>
            )}

            {100 - maleIncidence === 0 ? null : (
              <Typography
                style={{
                  width: `${100 - maleIncidence}%`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {100 - maleIncidence}%
              </Typography>
            )}
          </div>
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
