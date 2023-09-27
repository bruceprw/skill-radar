import { React, useContext } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfileDetails from '../components/profile/ProfileDetails'
import AuthContext from "../store/auth-context";


import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const ctx = useContext(AuthContext);
  //console.log(ctx)
  return (
    <>
    <h2>{ctx.firstName}s Profile</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container spacing={2} xs={12} md={12}>
          <Grid item xs={4} md={4}>
            <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src=''
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
          <Divider />
            <CardActions>
              <Button
                fullWidth
                variant="text"
              >
                Upload picture
              </Button>
            </CardActions>
            </Box>
          


          </Grid>
          <Grid item xs={8} md={8}>
            <ProfileDetails />
          </Grid>
        </Grid>

        <Grid item xs={12}>
        <Card>
            <h3>Interests</h3>
              Motor Biking, C++
            </Card>
          
        </Grid>
        <Grid item xs={12}>
          <Card>
            <h3>Skills</h3>
              Poached Eggs
          </Card>
        </Grid>
        <Grid item xs={12}>
        <Card>
            <h3>Qualifications</h3>
            BSc Computer Science
        </Card>          
        </Grid>
        <Grid item xs={12}>
        <Card>
            <h3>Connections</h3>
        </Card>          
        </Grid>
         
      </Grid>
      </Box>
  </>
      
  );
}
