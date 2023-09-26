import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import People from "./People";
import Profile from "./Profile";

const MainContent = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Dashboard />} />
      <Route path={'/overview'} element={<Overview />} />
      <Route path={'/people'} element={<People />} />
      <Route path={'/profile'} element={<Profile />} />
    </Routes>
  )

}

export default MainContent;
