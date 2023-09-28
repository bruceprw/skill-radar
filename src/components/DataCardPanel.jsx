import DataCard from "./DataCard";
import Grid from "@mui/material/Grid";

const DataCardPanel = (props) => {
  const dataArray = props.chartData;
  const totalCount = dataArray.reduce((n, { count }) => n + count, 0);

  return (
    <Grid container xs={12} spacing={2}>
      {dataArray.map((item) => {
        let chartTitle = "Uninterested";
        let chartDescription = "Uninterest Desc";
        let chartClass = "danger";

        if (item.mentorstatus == 1) {
          chartTitle = "Interested";
          chartDescription = "Interested Desc";
          chartClass = "primary";
        }

        if (item.mentorstatus == 2) {
          chartTitle = "Mentors";
          chartDescription = "Mentors Desc";
          chartClass = "success";
        }

        return (
          <Grid item xs={12} md={4}>
            <DataCard
              amount={item.count}
              title={chartTitle}
              total={totalCount}
              chartClass={chartClass}
              chartDescription={chartDescription}

            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DataCardPanel;
