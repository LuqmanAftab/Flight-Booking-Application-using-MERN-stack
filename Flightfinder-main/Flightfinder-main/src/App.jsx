import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      {/* Cloud background */}
      <div className="sky">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}



export default App;
