import React from "react";

function Ability(props) {
  const ability = props.abilities;
  return (
    <span
      style={{
        padding: 2,
        margin: 5,
        borderRadius: 3,
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        fontSize: 14,
        minWidth: 40,
        display: "flex",
        justifyContent: "center",
        color: "#000",
        textTransform: "capitalize",
      }}
    >
      {ability}
    </span>
  );
}

export default Ability;
