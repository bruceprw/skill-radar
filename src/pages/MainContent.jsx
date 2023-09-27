import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CommunityHub from "./CommunityHub";
import People from "./People";
import Profile from "./Profile";
import SkillSearch from "./SkillSearch"
import SkillResults from './SkillResults';

const MainContent = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Dashboard />} />
      <Route path={'/community'} element={<CommunityHub />} />
      <Route path={'/people'} element={<People />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/skill-search'} element={<SkillSearch />}/>
      <Route path={'/search-results'} element={<SkillResults />} />
    </Routes>
  )

}

export default MainContent;
