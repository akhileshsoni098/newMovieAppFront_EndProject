import React from 'react';
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
      <div className="logo">ALL MOVIES</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
      <div className="nav-links">
        <a href="www.google.com">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Watchlist</a>
      </div>
    </nav>
  );
}

export default Navbar