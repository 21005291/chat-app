import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Main from './components/Main/Main.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {}
        <Sidebar />  

        {}
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/help" element={<h2>Help Page</h2>} />
            <Route path="/activity" element={<h2>Activity Page</h2>} />
            <Route path="/settings" element={<h2>Settings Page</h2>} />
            <Route path="/profile" element={<h2>Profile Page</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
