import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { Chart } from "react-charts";
import LoadingLogo from "../assets/loading-logo";
import Box from "@mui/material/Box";

export default function Bar(props) {
  const isLoading = props.isLoading;

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <LoadingLogo colour={"#cccccc"} />
      </div>
    );
  }

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  const chartdata = props.data;

  const renderedData = chartdata.map((dataArray) => ({
    primary: dataArray.name,
    secondary: dataArray.count,
  }));

  const data = [
    {
      label: "Series 1",
      data: renderedData,
      color: "#ff0000",
    },
  ];

  return (
    <>
      <Box
        sx={{
          marginBottom: "1em",
          width: "auto",
          display: "flex",
          alignItems: "center",
          background: "#f0f4f8",
          borderRadius: "10px",
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", alignContent: 'center' }}>
          <div style={{ display: 'flex', fontSize: "2rem", marginRight: '0.25em' }}>📊</div>
          <div style={{ display: "inline", alignSelf: 'center' }}>
            Here is description of this chart
          </div>
        </div>
      </Box>
      <div style={{ width: "100%", height: "400px" }}>
        <Chart
          options={{
            defaultColors: ["#3dcab1"],
            data,
            primaryAxis,
            secondaryAxes,
          }}
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
