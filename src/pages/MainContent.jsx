import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CommunityHub from "./CommunityHub";
import People from "./People";
import Profile from "./Profile";
import SkillSearch from "./SkillSearch"
import SkillResults from './SkillResults';
import Onboarding from './Onboarding'
import Login from './Login';

const MainContent = () => {

  const [passResults, setPassResults] = useState([])

  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/'} element={<Dashboard />} />
      <Route path={'/community'} element={<CommunityHub />} />
      <Route path={'/people'} element={<People />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/skill-search'} element={<SkillSearch setPassResults={setPassResults}/>}/>
      <Route path={'/search-results'} element={<SkillResults passResults={passResults} />} />
      <Route path={'/onboarding'} element={<Onboarding />} />

    </Routes>
  )
// useState with setter in skill search and getting in skill results

}

export default MainContent;
