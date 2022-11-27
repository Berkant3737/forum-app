import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutUs from './pages/AboutUs/AboutUs';
import UserProfile from './pages/UserProfile/UserProfile';
import UserPost from './containers/UserPost/UserPost';
import Post from './pages/Post/Post';
import PostDetails from './containers/PostDetails/PostDetails';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/userpost" element={<UserPost/>} />
        <Route path="/topics-details" element={<Post/>} />
        <Route path="/post-details" element={<PostDetails/>} />
      </Routes>
    </div>
  )
}

export default App
