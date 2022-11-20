import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import SearchBar from '../../containers/SearchBar/SearchBar';
import RecentMessages from '../../containers/RecentMessages/RecentMessages';
function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <RecentMessages/>
      <h1>Home</h1>
    </div>
  )
}

export default Home