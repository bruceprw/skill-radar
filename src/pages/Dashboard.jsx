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
          You are a super-duper admin
        </Alert>
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
        <div style={{ display: "flex", alignContent: 'center' }}>
          <div style={{ display: 'flex', fontSize: "2rem", marginRight: '0.25em' }}>🔥</div>
          <div style={{ display: "inline", alignSelf: 'center' }}>
            Check out these hot skills in&nbsp;<b>Defence</b>&nbsp;needed&nbsp;
            <b>right now</b>
            &nbsp;and register your interest!
          </div>
        </div>
      </Box>
      {userType == 1 && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Alert severity="warning" sx={{ marginBottom: "1em" }}>
            Add your Interests!
            <br />
            <Button
              sx={{ mt: 2, mb: 2, ml: 2 }}
              onClick={() => navigate("/onboarding")}
              variant="contained"
              color="blue"
            >
              Onboarding
            </Button>
          </Alert>
        </Stack>
      )}
      <Box sx={{ maxWidth: "100%" }}>
        <SlideComponent />
      </Box>
    </Box>
  );
};

export default Dashboard;
