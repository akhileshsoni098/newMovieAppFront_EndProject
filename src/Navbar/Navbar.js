import React from 'react';
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
      <div className="logo">MOVIES</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
      <div className="nav-links">
        <a href="/dashboard">Home</a>
        <a href="/UserProfile">Profile</a> 
        <a href="www.google.com">Reviews & Rating</a>
        <a href="www.yahoo.com">Contact</a>
        <a href="/WatchList">Watchlist</a>
      </div>
    </nav>
  );
}

export default Navbar