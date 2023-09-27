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
      <Alert severity="info" sx={{ marginBottom: "1em", width: "auto" }}>
        Check out the hot skills in Defence needed right now.
      </Alert>
      <Box sx={{ maxWidth: "100%" }}>
        <SlideComponent />
      </Box>
    </Box>
  );
};

export default Dashboard;
