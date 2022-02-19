import React from "react";

function TypeTag(props) {
  const type = props.types;
  let backgroundColor = "";
  let fontColor = "";

  if (type === "fire") {
    backgroundColor = "#ec312f";
    fontColor = "#fff";
  }
  if (type === "water") {
    backgroundColor = "#0c83f3";
    fontColor = "#fff";
  }
  if (type === "grass") {
    backgroundColor = "#23ad31";
    fontColor = "#fff";
  }
  if (type === "bug") {
    backgroundColor = "#006400";
    fontColor = "#fff";
  }
  if (type === "flying") {
    backgroundColor = "#97c2f8";
    fontColor = "#fff";
  }
  if (type === "poison") {
    backgroundColor = "#a156db";
    fontColor = "#fff";
  }
  if (type === "electric") {
    backgroundColor = "#f3f31c";
    fontColor = "#000";
  }
  if (type === "rock") {
    backgroundColor = "#cab835";
    fontColor = "#000";
  }
  if (type === "normal") {
    backgroundColor = "#dad9d5";
    fontColor = "#000";
  }
  if (type === "dark") {
    backgroundColor = "#646668";
    fontColor = "#fff";
  }
  if (type === "fairy") {
    backgroundColor = "#eec3f0";
    fontColor = "#000";
  }
  if (type === "ground") {
    backgroundColor = "#aca271";
    fontColor = "#000";
  }
  if (type === "steel") {
    backgroundColor = "#b8b7b4";
    fontColor = "#000";
  }
  if (type === "dragon") {
    backgroundColor = "#ac85ff";
    fontColor = "#000";
  }
  if (type === "fighting") {
    backgroundColor = "#8f4d5e";
    fontColor = "#fff";
  }
  if (type === "ghost") {
    backgroundColor = "#5c5cb6";
    fontColor = "#fff";
  }
  if (type === "ice") {
    backgroundColor = "#8ed6ec";
    fontColor = "#000";
  }
  if (type === "psychic") {
    backgroundColor = "#fd62d2";
    fontColor = "#fff";
  }

  return (
    <span
      style={{
        background: `${backgroundColor}`,
        padding: 5,
        margin: 5,
        borderRadius: 3,
        fontFamily: "monospace",
        fontWeight: "normal",
        fontSize: 13,
        minWidth: 40,
        display: "flex",
        justifyContent: "center",
        color: `${fontColor}`,
      }}
    >
      {type}
    </span>
  );
}

export default TypeTag;
