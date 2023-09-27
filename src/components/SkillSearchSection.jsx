import React, { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon, Button, FormControl, Select, MenuItem, Checkbox, ListItemText, Input, InputLabel, Chip, Autocomplete, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const SkillSearchSection = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate=useNavigate();

  const handleSkillChange = (newValue) => {
    setSelectedSkills(newValue);
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const startSearch = () => {
    navigate("/search-results")
    
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
      <iframe
        width="960"
        height="720"
        src="https://eu-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/896803506373/dashboards/c2fcdfd1-a070-415c-ace7-a63bd79aeee1?directory_alias=teamnine">
    </iframe>
    </Box>
    
  );
};

export default SkillSearchSection;