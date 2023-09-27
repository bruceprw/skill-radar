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
  const navigate = useNavigate()

  const name = ctx.firstName;
  const userType = ctx.userType;

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <h2 style={{display: 'flex'}}>
        Hello, <div className="text-secondary" style={{marginLeft: '0.25em'}}>{name}</div>.
      </h2>
      {userType == 3 && (
        <Alert severity="warning" sx={{ marginBottom: "1em", marginRight: "1em" }}>
          You are a super-duper admin
        </Alert>
      )}
      {userType == 1 && (
        <Stack   direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Alert severity="warning" sx={{ marginBottom: "1em" }}>
            Add your Interests!<br/>
              <Button
                    sx={{mt: 2, mb: 2, ml: 2}}
                    onClick={() => navigate('/onboarding') }
                    variant="contained"
                    color="blue"
                  >
                    Onboarding
                </Button>
        </Alert>
        </Stack>

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
