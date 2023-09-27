import ResizableBox from "./ResizableBox"
import useDemoConfig from "./useDemoConfig"
import React from "react"
import { Chart } from "react-charts"

export default function Bar(props) {

  const isLoading = props.isLoading;

  if (isLoading) {

    return;

  }

  const primaryAxis = React.useMemo(
    () => ({
      getValue: datum => datum.primary
    }),
    []
  )

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: datum => datum.secondary
      }
    ],
    []
  )



const chartdata = props.data;

const renderedData = chartdata.map(dataArray => ({ primary: dataArray.name, secondary: dataArray.count }));

const data = [
  {
      "label": "Series 1",
      "data": renderedData
  }
];
  console.log('Result', data);

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes
          }}
        />
      </ResizableBox>
    </>
  )
}
