import React from "react";
import { Toolbar, Typography, Button, AppBar } from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
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
