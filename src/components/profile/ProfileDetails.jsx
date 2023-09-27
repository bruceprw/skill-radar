import { React, useContext } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AuthContext from "../../store/auth-context";

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


export default function AccountInformation(props) {
  const ctx = useContext(AuthContext);
  console.log(ctx)
  return(
    
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          <p>Account first Name:</p> 
          <strong>{ctx.firstName}</strong>
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          <p>Account Last Name:</p>  
          <p><strong>{ctx.lastName}</strong></p>
        </Typography>

        <Typography
          color="text.secondary"
          variant="body2"
        >
          <p>Account Contact Email:</p>
          <p><strong>{ctx.userContact}</strong></p>
          
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          <p>Account Permission:</p>  
          <p><strong>{ctx.userType}</strong></p>
        </Typography>
        </Box>
      </Box>
    
   
  );
};