import React, { useState } from 'react';
// import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon, Button, FormControl, Select, MenuItem, Checkbox, ListItemText, Input, InputLabel, Chip, Autocomplete, TextField } from '@mui/material';

export const SkillSearch = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);


  const handleSkillChange = (newValue) => {
    setSelectedSkills(newValue);
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const startSearch = () => {
    console.log("Searching with skills:", selectedSkills);
    // router.push("/results")
  };

  const skills = ["Python", "Archery"];

  return (
    <Box>
      <Card sx={{ p: 2 }}>
        <FormControl sx={{ marginBottom: 3, width: '100%' }}>
          <Autocomplete
            multiple
            id="Skills"
            options={skills}
            disableCloseOnSelect
            value={selectedSkills}
            onChange={(event, newValue) => {
              handleSkillChange(newValue);
            }}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox checked={selected} />
                <ListItemText primary={option} />
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Skills"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={startSearch} sx={{ marginBottom: 3, marginTop: 3 }}>
          Start Search
        </Button>
      </Card>
    </Box>
  );
};
