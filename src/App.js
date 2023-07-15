import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import MainContent from './Components/MainContent';
import Profile from './Components/Profile';
import Reports from './Components/Reports';
import Cource from './Components/Cource';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <div id="content">
          <NavBar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Cource" element={<Cource />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
