import React, { useContext, useState } from "react";
import { Toolbar, Typography, Button, AppBar } from "@mui/material";
import { NavbarContext } from "../context/NavbarContext";
import Pokemon from "../pages/Pokemon";
//Access the color variable from your context and use it to color your navbar
function Navbar() {
  const { navbarColor } = useContext(NavbarContext);
  return (
    <div>
      <AppBar style={{ background: `${navbarColor}` }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
