import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "./pages/Header";
import LeftColumn from "./pages/LeftColumn";
import MainContent from "./pages/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Grid container spacing={2}>
        <Grid item xs={12} className="secondary">
          <Box>
            <Header />
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          sm={3}
          className="greyscale"
          sx={{ height: "100vh", display: { xs: "none", md: "block" } }}
        >
          <Box>
            <LeftColumn />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          sx={{ margin: { xs: "0 2em 0 2em", md: "0 auto" } }}
        >
          <Box>
            <MainContent />
            <Box
              className="secondary"
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: "center",
                padding: "0.5em",
              }}
            >
              © 2023 - Hackathon 22 | Team 9
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
