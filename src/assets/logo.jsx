import { useTheme } from '@mui/material/styles';
import RadarIcon from '@mui/icons-material/Radar';

export const Logo = (props) => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  let type = 'regular';

  if (props.type) {
  
    type = props.type;

  }

  let main_colour = '#071C42';
  let second_colour = '#FFFFFF';

  if (type == 'dark') {

    main_colour = '#071C42';
    second_colour = '#071C42';

  }

  return (
      <RadarIcon sx={{ color: second_colour, fontSize: '10em'}}/>
  );
};
