import { React, useContext } from "react";
import SlideComponent from "../components/Slider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AuthContext from "../store/auth-context";

const Dashboard = () => {
  const ctx = useContext(AuthContext);

  const name = ctx.firstName;
  const userType = ctx.userType;

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <h2 style={{display: 'flex'}}>
        Hello, <div className="text-secondary" style={{marginLeft: '0.25em'}}>{name}</div>.
      </h2>
      {userType == 3 && (
        <Alert severity="warning" sx={{ marginBottom: "1em" }}>
          You are a super-duper admin
        </Alert>
      )}
      <Box sx={{ marginBottom: "1em", width: "auto", display: 'flex', alignItems: 'center', background: '#f0f4f8', borderRadius: '10px', padding: '1em' }}>
      <div style={{fontSize: '2rem'}}>🔥</div>&nbsp;&nbsp; Check out these hot skills in&nbsp;<b>Defence</b>&nbsp;needed&nbsp;<b>right now</b>&nbsp;and register your interest!
      </Box>
      <Box sx={{ maxWidth: "100%" }}>
        <SlideComponent />
      </Box>
    </Box>
  );
};

export default Dashboard;
