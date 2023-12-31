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
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [userContact, setuserContact] = useState(false);

  useEffect(() => {

    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      setuserContact(userEmail)
      loginHandler(userEmail, null);

    }

  }, []);

  const loginHandler = (email, password) => {
    let userType = 0;
    let fname = null;
    let lname = null;

    if (email.toLowerCase() == "james@test.com") {
      userType = 1;
      fname = 'James';
      lname = 'Rifleman';
    }

    if (email.toLowerCase() == "helen@test.com") {
      userType = 2;
      fname = 'Helen';
      lname = 'Major';
    }

    if (email.toLowerCase() == "jeff@test.com") {
      userType = 3;
      fname = 'Jeff';
      lname = 'Admiral';
    }

    if (email.toLowerCase() == "luke@test.com") {
      userType = 1;
      fname = 'Luke';
      lname = 'Dale';
    }

    localStorage.setItem("userType", userType);

    if (userType) {
      setUserType(userType);
      setFirstName(fname);
      setLastName(lname);

      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userEmail", email);

      setLoggedIn(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
    localStorage.removeItem("userEmail");

    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userType: userType,
        firstName: firstName,
        lastName: lastName,
        userContact: userContact
      }}
    >
      {!isLoggedIn && <Login onLogin={loginHandler} />}

      {isLoggedIn && (
          <Grid container spacing={2}>
            <Grid item xs={12} className="secondary">
              <Box>
                <Header onLogout={logoutHandler} />
              </Box>
            </Grid>
            <Grid
              item
              xs={0}
              sm={3}
              className="greyscale"
              sx={{ height: "auto", display: { xs: "none", md: "block" } }}
            >
              <Box sx={{ height: "100vh" }}>
                <LeftColumn onLogout={logoutHandler} />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              sx={{
                margin: { xs: "0 2em", md: "0 auto" },
                width: { xs: "80%", md: "100%" },
                padding: { xs: "unset", md: "0 1em 0 0" },
              }}
            >
              <Box sx={{ height: { xs: "100vh" } }}>
                <MainContent />
                <Box
                  sx={{
                    height: '60px'
                  }}
                >
                  &nbsp;
                </Box>
                <Box
                  id="footer"
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
                  © 2023 - Hackathon 23 | Team 9
                </Box>
              </Box>
            </Grid>
          </Grid>
      )}
    </AuthContext.Provider>
  );
}

export default App;