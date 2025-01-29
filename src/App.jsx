import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Home from "./pages/Home.jsx"; // Import the Home component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* landing page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
