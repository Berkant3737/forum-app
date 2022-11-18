import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutUs from './pages/AboutUs/AboutUs';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
