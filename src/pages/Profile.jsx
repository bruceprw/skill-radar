import { React, useContext } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfileDetails from '../components/profile/ProfileDetails'
import ProfileSkills from '../components/profile/ProfileSkills'
import ProfileConnections from '../components/profile/ProfileConnections'
import ProfileQualifications from '../components/profile/ProfileQualifications'
//import ProfileBadges from '../components/profile/ProfileBadges'
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
            mt: 15,
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
            <h3>Badges Earned</h3>
            <img src= '/public/assets/badges/ArcheryBadge.png' alt="Archery Badge" height="100" />
            <img src= '/public/assets/badges/CodingBadge.png' alt="Coding Badge" height="100" />
            <img src= '/public/assets/badges/DroneBadge.png' alt="Drone Badge" height="100" />
            <img src= '/public/assets/badges/SkiBadge.png' alt="Ski Badge" height="100" />
            
        </Card>
          
        </Grid>
        <Grid item xs={12}>
          <Card>
            <h3>Skills</h3>
            <ProfileSkills/>
          </Card>
        </Grid>
        <Grid item xs={12}>
        <Card>
            <h3>Qualifications</h3>
            <ProfileQualifications/>
        </Card>          
        </Grid>
        <Grid item xs={12}>
        <Card>
            <h3>Connections</h3>
            <ProfileConnections />
        </Card>          
        </Grid>
         
      </Grid>
      <Grid item xs={12}>
      <Box 
      sx={{
        width: 100,
        height: 100}}>
            <h3></h3>
            
        </Box>      
      </Grid>
      </Box>
  </>
      
  );
}
