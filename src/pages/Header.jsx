import React from "react";
import LogoFull from "../assets/logo-full.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} >
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <LogoFull />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box>
          Menu
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
