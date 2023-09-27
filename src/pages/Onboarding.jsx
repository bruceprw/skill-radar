import React, { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon, Button, FormControl, Select, MenuItem, Checkbox, ListItemText, Input, InputLabel, Chip, Autocomplete, TextField, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { addUserAttributes, getListUsersByAttributes } from '../api';
export const SkillSearchSection = ({setPassResults}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([])
  const navigate=useNavigate();

  const handleSkillChange = (newValue) => {
    setSelectedSkills(newValue);
    handleIndexes(newValue);
  };

   const handleIndexes = (value) => {
    setSelectedIndexes(value.map((v) => skills.indexOf(v) + 1));
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const saveInterests = async () => {
    const results = await(addUserAttributes(selectedIndexes));
    navigate("/people")
    
  };

  const skills = [
                    "Python Programming",
                    "Motor Biking",
                    "C++ Programming",
                    "French Language",
                    "Spanish Language",
                    "First Aider",
                    "Physiotherapist",
                    "Chef",
                    "Power BI",
                    "Figma"
                  ];

  return (
    <Box>
        <Typography variant="h4">
                  Onboarding
                </Typography>
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
                label="Interests"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={saveInterests} sx={{ marginBottom: 3, marginTop: 3 }}>
          Save Interests
        </Button>
      </Card>
    </Box>
    
  );
};

export default SkillSearchSection;