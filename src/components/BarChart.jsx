import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { Chart } from "react-charts";

export default function Bar(props) {
  const isLoading = props.isLoading;

  if (isLoading) {
    return;
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
      color: "#ff0000"
    },
  ];

  return (
    <>
      <div style={{width: '100%', height: '400px'}}>
        <Chart
          options={{
            defaultColors: [ '#3dcab1'],
            data,
            primaryAxis,
            secondaryAxes,
          }}
          style={{width: '100%'}}
        />
      </div>
    </>
  );
}
