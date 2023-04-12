import React, { useEffect, useState } from "react";
import { getPosts } from "../../scripts/dashboard";
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
                  <div className="post-review">
                    Great Movie You Should Watch It..
                  </div>
                </div>
              </div>
            );
          })}
      </div>
 </div>
);
}
