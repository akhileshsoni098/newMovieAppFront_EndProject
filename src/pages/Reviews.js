import axios from "axios";
import { appConfig } from "../config/config";
import React, { useState } from "react";

const ReviewForm = ({ movieId }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `${appConfig.API_URL}/review`,
        { movieId, review, rating },
        { headers: { "Content-Type": "application/json" } }
      );
      setReview("");
      setRating(0);
      setErrorMessage("");
      alert("Review submitted successfully!");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
