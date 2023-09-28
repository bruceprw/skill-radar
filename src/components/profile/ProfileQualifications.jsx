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


export default function AccountQualifications(props) {
  const ctx = useContext(AuthContext);
  return(
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
        >         
        Level 3 BTEC Communications, A-Level Computer Science
        </Typography>
      </Box>  
  );
};