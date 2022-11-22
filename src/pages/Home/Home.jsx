import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import SearchBar from '../../containers/SearchBar/SearchBar';
import RecentMessages from '../../containers/RecentMessages/RecentMessages';
import Topics from '../../containers/Topics/Topics';
import Footer from '../../containers/Footer/Footer';
function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <RecentMessages/>
      <Topics/>
      <Footer/>
    </div>
  )
}

export default Home