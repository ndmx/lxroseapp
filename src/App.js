import React, { useEffect, useState } from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import Popup from './pages/Popup';
import CookieBanner from './utils/CookieBanner'; // Adjusted import path
import PrivacyPolicy from './pages/PrivacyPolicy';
import NutritionServices from './pages/NutritionServices';
import MentalServices from './pages/MentalServices';
import NursingServices from './pages/NursingServices';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastPopupTime = localStorage.getItem('lastPopupTime');
    const now = new Date().getTime();
    const twoDaysInMs = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    if (!lastPopupTime || now - lastPopupTime > twoDaysInMs) {
      setShowPopup(true);
      localStorage.setItem('lastPopupTime', now);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <HashRouter>
      <Header />
      <CookieBanner /> {/* Render Cookie Banner */}
      {showPopup && <Popup handleClose={handleClose} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mentalservices" element={<MentalServices />} />
        <Route path="/nutritionservices" element={<NutritionServices />} />
        <Route path="/nursingservices" element={<NursingServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;