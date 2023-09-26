import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AccountPage from "./Pages/AccountPage";
import SearchResultsPage from "./Pages/SearchResultsPage";


import './App.css'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AccountPage" element={<AccountPage />} />
        <Route path="/SearchResultsPage" element={<SearchResultsPage />} />

        
        
      </Routes>
    </Router>
    </>
  )
}

export default App
