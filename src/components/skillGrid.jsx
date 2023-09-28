import { React, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SkillCard from "./skillCard.jsx";

const SkillGrid = () => {
  const skills = [
    { title: 'Pythonsss', description: 'Snake code' },
    { title: 'JavaScript', description: 'Cool code' },
    { title: 'Java', description: 'Dork code' },
  ];

  let [isLoading, setIsLoading] = useState(true);
  let [countAttributes, setCountAttributes] = useState(false);
  let [countMentorStatus, setCountMentorStatus] = useState(false);

  useEffect(() => {
    getCountAttributes()
      .then((data) => {
        setCountAttributes(data);
        setTimeout(function () {
          setIsLoading(false);
          setShowTable(true)
        }, 1500);
      })
      .catch((error) => {
        setIsError(true);
        setShowTable(false)
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <SkillCard title={skill.title} description={skill.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillGrid;
