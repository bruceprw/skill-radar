import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid xs={12} md={6}>   
          <Box sx={{ width: '100%' }}>
            Profile
            </Box>
            <Box >
              Medals
              </Box>
          </Grid>
          <Grid xs={12} md={6}>  
          Account details          
          </Grid>
        </Grid>     
      </Box>
    </div>   
  );
};

export default Profile;
