import React from "react";
import SlideComponent from "../components/Slider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <h2>Dashboard</h2>
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
