import { React, useContext } from "react";
import SlideComponent from "../components/Slider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AuthContext from "../store/auth-context";

const CommandDash = () => {
  const ctx = useContext(AuthContext);

  const name = ctx.firstName;
  const userType = ctx.userType;

  return (
    <>
    {userType == 3 && (
      <Box sx={{ maxWidth: "100%" }}>
        <h2>Hello, {name}.</h2>
        <p>Super Admin Function Here</p>
      </Box>
    )}
    {userType != 3 && (
      <Alert severity="warning" sx={{ marginBottom: "1em"}}>
        You do not have permission to view this.
      </Alert>
    )}
    </>
  );
};

export default CommandDash;
