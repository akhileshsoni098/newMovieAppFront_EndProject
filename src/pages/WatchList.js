/* import React, { useEffect, useState } from "react";
import { WatchList, removeFromWatchList} from "../scripts/dashboard";
// , clearWatchList 
import "./WatchList.css"

export default function Watchlist() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    WatchList()
      .then((response) => {
        setPosts(response.data.data);
      })
      
      .catch((err) => console.log(err));  
  }, []);

  // ======================== remove one 
 
    const handleRemove = async (postId) => {
      try {
        const response = await removeFromWatchList(postId);

        console.log(postId)
        console.log(response.data.message);
     
        // Remove the post from the state after successfully removing it from the watchlist
        setPosts(posts.filter((post) => post.movies._id !== postId));
      } catch (err) {
        console.log(err);
      }
    };
    
//============================================== clear all
  const handleClear = async () => {
    try {
      // const response = await clearWatchList();
      // console.log(response.data.message);
      // // Remove all posts from the state after successfully clearing the watchlist
      // setPosts([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-container">
    <div className="watchlist-header">
      <h2>My Watchlist</h2>
      <button className="clear-button" onClick={handleClear}>
        Clear Watchlist
      </button>
    </div>
    <div className="dashboard-content">
      {posts.map((post) => {
        const { year, imdbID, title, poster, type } = post.movies;
        console.log(post.movies)
        return (
          <div key={post.movies._id} className="post-card">
            <img src={poster} alt="Movie Poster" className="post-image" />
            <div className="post-details">
              <div className="post-title">{title}</div>
              <div className="post-year">{year}</div>
              <div className="post-info">
                <span className="post-info-label">IMDb ID:</span>{" "}
                {imdbID}
              </div>
              <div className="post-info">
                <span className="post-info-label">Type:</span> {type}
              </div>
            </div>
            <div className="btn">
              <button className="remove-button" onClick={() => handleRemove(post.movies._id)}>
                Remove from Watchlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
} */



import React, { useEffect, useState } from "react";
import { WatchList, removeFromWatchList } from "../scripts/dashboard";
import "./WatchList.css";

export default function Watchlist() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    WatchList()
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((err) => console.log(err));  
  }, []);

  const handleRemove = async (postId) => {
    try {
      // const response = await addWatchList(post._id);
      await removeFromWatchList(postId);
      console.log("postId", postId);
      setPosts(posts.filter((post) => post.movies._id !== postId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="watchlist-header">
 
        <button className="clear-button" onClick={() => setPosts([])}>
          Clear Watchlist
        </button>
      </div>
      <div className="dashboard-content">
        {posts.map((post) => {
          const { year, imdbID, title, poster, type, _id } = post.movies;
          console.log(_id)
          return (
            <div key={_id} className="post-card">
              <img src={poster} alt="Movie Poster" className="post-image" />
              <div className="post-details">
                <div className="post-title">{title}</div>
                <div className="post-year">{year}</div>
                <div className="post-info">
                  <span className="post-info-label">IMDb ID:</span>{" "}
                  {imdbID}
                </div>
                <div className="post-info">
                  <span className="post-info-label">Type:</span> {type}
                </div>
              </div>
              <div className="btn">
                <button
                  className="remove-button"
                  onClick={() => handleRemove(_id)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
