import { Grid } from '@mui/material';
import SkillCard from "./skillCard.jsx";

const SkillGrid = () => {
  const skills = [
    { title: 'Python', description: 'General use programming' },
    { title: 'Drones', description: 'Flying + Photography' },
    { title: 'French', description: 'Boulangerie Appreciation' },
  ];

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
