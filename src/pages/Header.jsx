import React from "react";
import LogoFull from "../assets/logo-full.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserIcon from "../components/UserIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9} sm={6} md={8}>
        <Box sx={{ display: "flex", justifyContent: "start", padding: "1rem" }}>
          <Box
            sx={{
              alignSelf: "center",
              marginRight: "0.5em",
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </Box>
          <Link to={"/"}>
            <LogoFull fontSize={"3rem"} />
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sm={6}
        md={4}
        sx={{ display: "flex", justifyContent: "end", paddingRight: "1em" }}
      >
        <Box
          sx={{
            display: "flex",
            justifySelf: "end",
            alignSelf: "center",
            padding: "1rem",
          }}
        >
          <UserIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
