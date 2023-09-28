import React, { useState, useEffect } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon, Button, FormControl, Select, MenuItem, Checkbox, ListItemText, Input, InputLabel, Chip, Autocomplete, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { getListUsersByAttributes, getListAttributes } from '../api';
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

  const startSearch = async () => {
    const results = await(getListUsersByAttributes(selectedIndexes));
    setPassResults(results)
    navigate("/search-results")
    
  };

  let [isError, setIsError] = useState(false);
  let [showTable, setShowTable] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [listAttributes, setListAttributes] = useState([]);

  useEffect(() => {
    getListAttributes()
      .then((data) => {
        setListAttributes(data);
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

  const skills = listAttributes.map(item => {
    return item.name
})

  return (
    <Box>
      <Card sx={{ p: 2 }}>
        <FormControl sx={{ marginBottom: 1, width: '100%' }}>
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
        <Button variant="contained" color="success" onClick={startSearch} sx={{ marginBottom: 3, marginTop: 3 }}>
          Start Search
        </Button>
      </Card>
    </Box>
    
  );
};

export default SkillSearchSection;