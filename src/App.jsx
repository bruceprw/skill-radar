import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "./pages/Header";
import LeftColumn from "./pages/LeftColumn";
import MainContent from "./pages/MainContent";
import Login from "./pages/Login";

import AuthContext from "./store/auth-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(false);

  useEffect(() => {
    const logInDate = localStorage.getItem("isLoggedIn");

    if (logInDate === "1") {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {

    if (email == 'luke@test.com') {

      setUserType(1);
      localStorage.setItem("userType", "1");

    }
    console.log(email, password);
    localStorage.setItem("isLoggedIn", "1");
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    console.log('LOGOUT')
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");

    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: false }}>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && (
        <Router>
          <Grid container spacing={2}>
            <Grid item xs={12} className="secondary">
              <Box>
                <Header onLogout={logoutHandler}/>
              </Box>
            </Grid>
            <Grid
              item
              xs={0}
              sm={3}
              className="greyscale"
              sx={{ height: "auto", display: { xs: "none", md: "block" } }}
            >
              <Box>
                <LeftColumn onLogout={logoutHandler}/>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              sx={{ margin: { xs: "0 2em 0 2em", md: "0 auto" },  padding: { xs: "unset", md: "0 1em 0 0" } }}
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
      )}
    </AuthContext.Provider>
  );
}

export default App;
