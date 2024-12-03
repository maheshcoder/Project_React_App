import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoPage from './components/LogoPage';
import DetailPage from './components/DetailPage';
import CarouselPage from './components/CarouselPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/details" element={<DetailPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
