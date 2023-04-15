import React, { useState } from "react";
import axios from "axios";
import { appConfig } from "../config/config";
import "./UpdateProfile.css";
export default function UpdateProfile() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    const updatedData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };

    try {
      const res = await axios.put(`${appConfig.API_URL}/updateUser`, updatedData, config);
      setMessage(res.data.message);
      console.log(res)
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="update-profile-container">
      <form className="update-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="submit">Update</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}