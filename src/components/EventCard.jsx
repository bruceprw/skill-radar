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


//import the needed icons
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PianoIcon from '@mui/icons-material/Piano';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CasinoIcon from '@mui/icons-material/Casino';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TerminalIcon from '@mui/icons-material/Terminal';
import Groups2Icon from '@mui/icons-material/Groups2';

//array of the icons linked to the imported location
const statusIcon = {
  DirectionsBikeIcon: <DirectionsBikeIcon />,
  SportsSoccerIcon: <SportsSoccerIcon />,
  LocalPrintshopIcon: <LocalPrintshopIcon />,
  MenuBookIcon: <MenuBookIcon />,
  MusicNoteIcon: <MusicNoteIcon />,
  PianoIcon: <PianoIcon />,
  FlightIcon: <FlightIcon />,
  DirectionsCarIcon: <DirectionsCarIcon />,
  CameraAltIcon: <CameraAltIcon />,
  SportsEsportsIcon: <SportsEsportsIcon />,
  TerminalIcon: <TerminalIcon />,
  Groups2Icon: <Groups2Icon />,
  CameraAltIcon: <CameraAltIcon />,
  CasinoIcon :<CasinoIcon />
  // other icons based on your status
};

//display the icon


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
         
          
          <Chip icon={statusIcon[props.logo]} variant="outlined"/> 
        
          
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
