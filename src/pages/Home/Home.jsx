import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import SearchBar from '../../containers/SearchBar/SearchBar';

function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <h1>Home</h1>
    </div>
  )
}

export default Home