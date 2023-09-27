import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function OverflowCard(props) {
  return (
    <Card variant="outlined" sx={{
      maxWidth: '100%',
      marginRight: '1em'
    }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={props.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{props.title}</Typography>
        <Typography level="body-sm">{props.content}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}