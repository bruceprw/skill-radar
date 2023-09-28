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
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';

export default function EventCard(props) {

  console.log(props);
  
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
        <br />
        <Typography
          align="center"
          variant="body1"
        >
          {props.desc}
        </Typography>
      </CardContent> 
      <CardActions  style={{display:'flex', justifyContent:'space-between', width:'95%' }}>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <RemoveCircleIcon/>
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
