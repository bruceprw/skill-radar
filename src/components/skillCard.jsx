import { Card, CardContent, Typography } from '@mui/material';

export const SkillCard = (props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 200,
        width: 150,
      }}
    >
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          {props.title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
