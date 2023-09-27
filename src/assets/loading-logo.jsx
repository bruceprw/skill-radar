import RadarIcon from '@mui/icons-material/Radar';

const LoadingLogo = (props) => {

  let type = 'regular';
  let fontSize = '5rem';
  let colour = '#071C42';

  if (props.type) {
  
    type = props.type;

  }

  if (props.fontSize) {
  
    fontSize = props.fontSize;

  }

  if (props.colour) {

    colour = props.colour;

  }

  return (
      <RadarIcon sx={{ color: colour, fontSize: fontSize}} className="logo-spin fast"/>
  );
};

export default LoadingLogo;