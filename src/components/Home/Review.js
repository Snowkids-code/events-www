import React from "react";
import data from "../../data/review.json";

function Review() {
  return (
    <div className="review-container">
      <div className="review-wrapper">
        <h2>What Others Say About Us</h2>
        <div className="review-cards-container">
          {data.map((data) => (
            <div className="card-container" key={data._id}>
              <div className="img-container">
                <img alt="img" src={data.profilePicture} layout="fill" />
              </div>
              <h2>{data.name}</h2>
              <p>{data.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
