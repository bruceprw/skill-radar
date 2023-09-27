import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
          <Grid item xs={12}>

            <Grid item xs={6}>
              <div>

              </div>
              <Item>Picture 
                <Avatar
                  src='/public/assets/profile-images/NoProfilePic.png'
                  sx={{
                    height: 80,
                    mb: 2,
                    width: 80
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>info</Item>
            </Grid>
            
          </Grid>

          <Grid item xs={12}>
            <Item>Intrests</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>skills</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Qualifications</Item>
          </Grid>
            <Item>connections</Item>
            <Item>xs=7</Item>
          </div>
          
        </Grid>
        
        <Grid item xs={6}>
          <div>
          <Grid item xs={12}>
          <h2>Badges</h2>
            <Box>

            </Box>
          </Grid>
          <Grid item xs={12}>
            <Item>News Feed</Item>
          </Grid> 
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
