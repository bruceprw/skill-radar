import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";

import Typography from "@mui/joy/Typography";

import { getBadgeIcon } from "./BadgeMapper";

export default function SkillCard(props) {
  const icon = getBadgeIcon(props.id);

  return (
    <Card
      sx={{
        maxWidth: "100%",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
      <Avatar>{icon}</Avatar>

        <Typography level="title-lg" sx={{my: '0.5em'}}>{props.title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            width: "100%",
          }}
        >
          <Avatar sx={{mr: '0.5em'}}>{props.description}</Avatar>
          <div>Interested</div>
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}></CardOverflow>
    </Card>
  );
}
