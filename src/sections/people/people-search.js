import React, { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon, Button, FormControl, Select, MenuItem, Checkbox, ListItemText, Input, InputLabel, Chip } from '@mui/material';

export const PeopleSearch = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (event) => {
    setSelectedSkills(event.target.value);
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const startSearch = () => {
    // Implement your search logic here
    console.log("Searching with skills:", selectedSkills);
  };

  return (
    <Box>
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          defaultValue=""
          fullWidth
          placeholder="Search people"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500, marginBottom: 3 }}
        />
        <FormControl sx={{ marginBottom: 3, width: '100%' }}>
          <InputLabel id="skills-label">Skills</InputLabel>
          <Select
            labelId="skills-label"
            id="skills"
            multiple
            value={selectedSkills}
            onChange={handleSkillChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
          >
            <MenuItem value="Python">
              <Checkbox checked={selectedSkills.indexOf('Python') > -1} />
              <ListItemText primary="Python" />
            </MenuItem>
            <MenuItem value="Archery">
              <Checkbox checked={selectedSkills.indexOf('Archery') > -1} />
              <ListItemText primary="Archery" />
            </MenuItem>
            {/* Add more skills here */}
          </Select>
        </FormControl>
        <Box sx={{ marginTop: 2 }}>
          {selectedSkills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              onDelete={() => removeSkill(skill)}
              sx={{ marginRight: 1, marginBottom: 1 }}
            />
          ))}
        </Box>
        <Button variant="contained" color="primary" onClick={startSearch} sx={{ marginBottom: 3 }}>
          Start Search
        </Button>
      </Card>
    </Box>
  );
};
