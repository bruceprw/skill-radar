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
import Chip from "@mui/material/Chip";
import CardOverflow from '@mui/joy/CardOverflow';
import ButtonGroup from '@mui/joy/ButtonGroup';
import UserBadges from './UserBadges';


export default function EventCard(props) {
  
  return(
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
          <UserBadges badges={props.logo}/> 
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
      
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Register intrest</Button>
            <Button>Remove From Feed</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
