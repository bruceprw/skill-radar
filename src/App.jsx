import { useState } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './pages/Header';
import LeftColumn from './pages/LeftColumn';
import MainContent from './pages/MainContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="secondary">
        <Box>
          <Header />
        </Box>
      </Grid>
      <Grid item xs={3} className="greyscale" sx={{height: '100vh'}}>
        <Box>
          <LeftColumn />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box>
          <MainContent />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
