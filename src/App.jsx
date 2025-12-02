import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Help from './pages/Help';
import Contacts from './pages/Contacts';
import NotSold from './pages/NotSold';
import Instruction from './pages/Instruction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contacts" element={<Contacts />} />
          <Route path="/not-sold-numbers" element={<NotSold />} />
        <Route path="/video-instructions" element={<Instruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
