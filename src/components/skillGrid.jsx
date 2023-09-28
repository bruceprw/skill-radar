import { React, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SkillCard from "./skillCard.jsx";
import { getCountAttributes } from "../api";

const SkillGrid = () => {
  const skills = [
    { title: 'Python', description: 'General use programming' },
    { title: 'Drones', description: 'Flying + Photography' },
    { title: 'French', description: 'Boulangerie Appreciation' },
  ];

  let [isLoading, setIsLoading] = useState(true);
  let [countAttributes, setCountAttributes] = useState([]);

  useEffect(() => {
    getCountAttributes()
      .then((data) => {
        setCountAttributes(data);
        setTimeout(function () {
          setIsLoading(false);
        }, 1500);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const orderList = countAttributes.sort((a,b) => b.count - a.count); // b - a for reverse sort
  const neworderList = orderList.slice(0, 4);

  return (
    <Grid container spacing={1}>
      {neworderList.map((skill, index) => (
        <Grid item xs={12} sm={3} md={3} lg={3} key={index}>
          <SkillCard title={skill.name} description={skill.count} id={skill.id}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillGrid;