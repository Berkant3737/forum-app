import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutUs from './pages/AboutUs/AboutUs';
import UserProfile from './pages/UserProfile/UserProfile';
import UserPost from './containers/UserPost/UserPost';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/test" element={<UserPost />} />
      </Routes>
    </div>
  )
}

export default App
