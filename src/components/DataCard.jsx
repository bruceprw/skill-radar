import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

export default function DataCard(props) {
  const dataAmount = props.amount;
  const dataTitle = props.title;
  const datatotal = props.total;
  const chartClass = props.chartClass;
  const chartDescription = props.chartDescription;
  const percentage = (100 / datatotal) * dataAmount;

  return (
    <Card variant="solid" color={chartClass} invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={percentage}>
          <Typography level="h2">{dataAmount}</Typography>
        </CircularProgress>
        <CardContent>
          <Typography level="h4">{dataTitle}</Typography>
          <Typography level="body-md">{chartDescription}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
