import React from "react";
import EventCard from "../components/EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Events from '../data/Events.json'

const data = Events.Events;

const Dashboard = () => {
  return (
    <div>
      <h2>Overview</h2>
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid item xs={12} md={4}>
            <EventCard title={card.title} content={card.content} logo={card.logo} desc={card.description} attendance={card.attendance}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
