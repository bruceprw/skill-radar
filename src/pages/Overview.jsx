import React from "react";
import EventCard from "../components/EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const data = [
  { title: "Title", content: "Content", icon: "icon" },
  { title: "Title 2", content: "Content 2", icon: "icon" },
  { title: "Title 4", content: "Content 2", icon: "icon" },
  { title: "Title 5", content: "Content 2", icon: "icon" },
];

const Dashboard = () => {
  return (
    <div>
      <h2>Overview</h2>
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid item xs={12} md={4}>
            <EventCard title={card.title} content={card.content}/>
          </Grid>
        ))}
      </Grid>
      <p>
        Proin eu quam vel ex interdum efficitur. Nunc a velit sodales, ornare
        nunc eget, imperdiet sapien. Mauris sed faucibus nisl. Vivamus eget
        elementum est, eget accumsan erat. Aenean pharetra egestas consequat.
        Nulla faucibus, odio ac egestas eleifend, tortor nulla lobortis nisi, a
        feugiat lacus mauris lobortis nisl. Aliquam erat volutpat. Morbi
        tristique, purus et semper ultrices, libero leo molestie est, sed
        tristique lacus ex at enim. Morbi sodales ultricies ultrices.
      </p>
    </div>
  );
};

export default Dashboard;
