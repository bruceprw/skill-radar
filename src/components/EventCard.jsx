import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { Stack, SvgIcon } from '@mui/material';

export default function EventCard(props) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={props.logo}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {props.title}
        </Typography>
        <Divider component="li" variant="inset" />
        <Typography
          align="center"
          variant="body1"
        >
          {props.desc}
        </Typography>
      </CardContent> 
    </Card>
  );
}
