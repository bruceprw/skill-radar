import RadarIcon from '@mui/icons-material/Radar';

const LogoFull = (props) => {

  let type = 'regular';
  let fontSize = '2rem';

  if (props.type) {
  
    type = props.type;

  }

  if (props.fontSize) {
  
    fontSize = props.fontSize;

  }

  let main_colour = '#071C42';
  let second_colour = '#FFFFFF';

  if (type == 'dark') {

    main_colour = '#071C42';
    second_colour = '#071C42';

  }

  return (
    <div className='logo' style={{fontSize: fontSize, display: 'flex', alignItems: 'center'}}>
      <div style={{fontFamily: 'Poppins', fontWeight: 100, color: second_colour}}>
      Skills
      </div>
      <div style={{fontFamily: 'Poppins', fontWeight: 800, color: main_colour}}>
      Radar
      </div>
      <RadarIcon sx={{fontSize: fontSize, color: second_colour}}/>
    </div>
  );
};

export default LogoFull;