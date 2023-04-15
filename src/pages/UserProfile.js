import React, { useEffect, useState } from "react";
import { Profile } from "../scripts/dashboard";
import { Link } from "react-router-dom";
import "./UserProfile.css";



function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await Profile();
      console.log("userData" , userData.data.data._id)
      setUser(userData.data.data);
    }

    fetchData();
  }, []);

 
  return (
    <div className="container">
      <h2>Your Profile</h2>
      {user ? (
        <div className="profile">
          <div className="avatar">{user.fname[0]}</div>
          <div className="info">
            <p className="name">{user.fname} {user.lname}</p>
            <p className="email">{user.email}</p>
            <p className="role">{user.role}</p>
          </div> 
        </div>
      ) : (
        <p>Your Profile  </p>
      )} 
       <div className="button-container">
       <Link to="/updateProfile">
    <button className="button">Update Profile</button>
  </Link>
      <button className="button">Delete Profile</button>
    </div>
    </div>
  );
}
export default UserProfile;
