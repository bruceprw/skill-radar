import { React, useContext } from "react";
import SlideComponent from "../components/Slider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AuthContext from "../store/auth-context";
import { Button } from "@mui/base";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const name = ctx.firstName;
  const userType = ctx.userType;

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <h2 style={{ display: "flex" }}>
        Hello,{" "}
        <div className="text-secondary" style={{ marginLeft: "0.25em" }}>
          {name}
        </div>
        .
      </h2>
      {userType == 3 && (
        <Alert
          severity="warning"
          sx={{ marginBottom: "1em", marginRight: "1em" }}
        >
          You are a super admin
        </Alert>
      )}
      {userType == 1 && (
        
        <Box
        sx={{
          marginBottom: "1em",
          width: "auto",
          display: "flex",
          alignItems: "center",
          background: "#3fcab1",
          borderRadius: "10px",
          color: 'white',
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            style={{ display: "flex", marginRight: "0.25em" }}
          >
          <Button
            sx={{ mt: 2, mb: 2, ml: 2 }}
            onClick={() => navigate("/onboarding")}
            variant="contained"
            color="blue"
          >
            Complete Onboarding
          </Button>
          </div>
          <div style={{ display: "inline", alignSelf: "center", marginLeft: '1em' }}>
            Welcome to SkillRadar. Please let us know your skills and interests.
          </div>
        </div>
      </Box>
      )}
      <Box
        sx={{
          marginBottom: "1em",
          width: "auto",
          display: "flex",
          alignItems: "center",
          background: "#f0f4f8",
          borderRadius: "10px",
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            style={{ display: "flex", fontSize: "2rem", marginRight: "0.25em" }}
          >
            🔥
          </div>
          <div style={{ display: "inline", alignSelf: "center" }}>
            Check out these hot skills in&nbsp;<b>Defence</b>&nbsp;needed&nbsp;
            <b>right now</b>
            &nbsp;and register your interest!
          </div>
        </div>
      </Box>
      <Box sx={{ maxWidth: "100%" }}>
        <SlideComponent />
      </Box>
    </Box>
  );
};

export default Dashboard;
