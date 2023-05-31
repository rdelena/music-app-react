import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
