import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume'; 
import './style.css'; // Import your styles here

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;


