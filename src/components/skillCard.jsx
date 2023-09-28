import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import UserBadges from "./UserBadges";
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
        <Avatar> {props.description}</Avatar>
        <Avatar> {icon}</Avatar>
        <Typography level="title-lg">{props.title}</Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}></CardOverflow>
    </Card>
  );
}
