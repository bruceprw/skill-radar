import React from "react";
import LogoFull from "../assets/logo-full.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserIcon from '../components/UserIcon';

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} >
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '1rem'}}>
          <LogoFull />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{display: 'flex', justifyContent: 'end', alignSelf: 'center', padding: '1rem'}}>
          <UserIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
