import React, { useEffect, useState } from "react";
import { getPosts, addWatchList, createReview } from "../../scripts/dashboard";
import "./Dashboard.css"

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        console.log(response.data.data);
        setPosts(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddToWatchList = async (post) => {
    try {
      const response = await addWatchList(post._id);
      console.log(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddReview = (post) => {
     createReview(post._id);
    console.log("Adding review for post", post);
  };

  return (
    <div className="dashboard-container">  
      <div className="dashboard-content">
        {posts.length > 0 &&
          posts.map((post) => {
            const { year, imdbID, title, poster, type } = post;
            return (
              <div key={Math.random()} className="post-card">
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
                  <button className="btn" onClick={() => handleAddToWatchList(post)}>
                    Add To WatchList
                  </button>
                  <button className="btn" onClick={() => handleAddReview(post)}>
                    Add Review
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
