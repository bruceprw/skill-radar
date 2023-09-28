import React, { useState } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Box,
  Card,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  Button,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
  InputLabel,
  Chip,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUserAttributes, getListUsersByAttributes } from "../api";
export const SkillSearchSection = ({ setPassResults }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const navigate = useNavigate();

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
    const results = await addUserAttributes(selectedIndexes);
    navigate("/people");
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
    "Figma",
  ];

  return (
    <Box>
      <h2>Onboarding</h2>
      <Box
        sx={{
          marginBottom: "1em",
          width: "auto",
          display: "flex",
          alignItems: "center",
          background: "#f0f4f8",
          borderRadius: "10px",
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            style={{ display: "flex", fontSize: "2rem", marginRight: "0.25em" }}
          >
            🏆
          </div>
          <div style={{ display: "inline", alignSelf: "center" }}>
            Let us know your skills and interest so we can match you with peers and potential job opportunities.
          </div>
        </div>
      </Box>
      <Card sx={{ p: 2 }}>
        <FormControl sx={{ marginBottom: 3, width: "100%" }}>
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
              <TextField {...params} label="Interests" variant="outlined" />
            )}
          />
        </FormControl>
        <Button
          variant="contained"
          color="success"
          onClick={saveInterests}
          sx={{ marginBottom: 3, marginTop: 3 }}
        >
          Save Interests
        </Button>
      </Card>
    </Box>
  );
};

export default SkillSearchSection;
