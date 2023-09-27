import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoFull from "../assets/logo-full";
import TextField from "@mui/material/TextField";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Box
      className="secondary"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={8} sx={{ marginTop: "5rem" }} className="secondary">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LogoFull fontSize={"3rem"}/>
        </Box>
        <Card sx={{ padding: "2rem" }}>
          <form onSubmit={submitHandler}>
            <div>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
                />
              </Box>
            </div>
            <div>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
                />
              </Box>
            </div>
            Use any email and a 6 letter password
            <div>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}

              >
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={!formIsValid}

                  sx={{width: '100%'}}
                >
                  Login
                </Button>
              </Box>
            </div>
          </form>
        </Card>
      </Grid>
    </Box>
  );
};

export default Login;
