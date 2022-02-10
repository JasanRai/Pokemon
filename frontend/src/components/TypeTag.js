import React from "react";

function TypeTag(props) {
  const type = props.types;
  let color = "";

  if (type === "fire") {
    color = "#ec312f";
  }
  if (type === "water") {
    color = "#0c83f3";
  }
  if (type === "grass") {
    color = "#23ad31";
  }
  if (type === "flying") {
    color = "#afb7df";
  }
  if (type === "poison") {
    color = "purple";
  }
  if (type === "bug") {
    color = "darkgreen";
  }

  return (
    <span
      style={{
        background: `${color}`,
        padding: 5,
        margin: 5,
        borderRadius: 3,
        fontFamily: "monospace",
        fontWeight: "normal",
        fontSize: 13,
        minWidth: 40,
        display: "flex",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {type}
    </span>
  );
}

export default TypeTag;
